import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import {
  encode,
  encodeChat,
  decode,
  isWithinTokenLimit,
  encodeGenerator,
  decodeGenerator,
  decodeAsyncGenerator,
} from 'gpt-tokenizer'


import * as ActPmt from "../../12.prompt.unit/prompt.action";
import * as ActAut from "../../13.author.unit/author.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

import { OllamaModel } from "../ollama.model";
import OllamaBit from "../fce/ollama.bit";
import State from "../../99.core/state";
import ollama from "ollama";
import * as S from "string";

import clipboard from 'clipboardy';

var bit, val, idx, dex, lst, dat;

export const initOllama = (cpy: OllamaModel, bal: OllamaBit, ste: State) => {
  debugger;
  return cpy;
};

export const updateOllama = (cpy: OllamaModel, bal: OllamaBit, ste: State) => {
  return cpy;
};

export const writeOllama = async (cpy: OllamaModel, bal: OllamaBit, ste: State) => {
  var ncp = require("copy-paste");

  ncp.copy("  ");

  bit = await ste.hunt(ActPmt.READ_PROMPT, {});
  var prompt = bit.pmtBit.src;

  if (prompt == '') prompt = 'tell me something funny about alligators'

  bit = await ste.hunt(ActAut.READ_AUTHOR, {});
  var author = bit.autBit.src;

  if (author == null && bal.src != null) author = bal.src


  if (author == null) author = 'best selling sci-fi author'

  var item = encode( prompt )

  //if ( item.length > 100000){
  //  debugger
  //  return 
 // }

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "context window:" + item.length })

  
  prompt
  author





  //if (prompt.length < 3) {
  // bit = await ste.bus(ActDsk.READ_DISK, { src: "./prompt.txt" });
  //prompt = bit.dskBit.dat;

  //  var lst = prompt.split("\n");

  //  var out = [];

  //  lst.forEach((a) => {
  //    if (a.includes("//")) return;
  //    out.push(a);
  // });

  // prompt = out.join("//");
  // }

  const message0 = { role: "system" as any, content: author };
  const message1 = { role: "user", content: prompt };

  // Example chat:
const chat = [
  message0,
  message1
] 





  const response = await ollama.chat({
    //model: "hermes2-8", old
    model: process.env.MODEL,
    //model: "llama3.1", old
    //model: "hermes3-2", old
    //model: "gemma3:1b",
    //model: "deepseek-r1:1.5b",
    //model: "gemma3:4b",
    //model: "gemma3:12b",





    //model: "umbral",


    //model: "llama3.2:1b",

    messages: [message0, message1],
    stream: true,
  });

  var output = [];
  var line = [];

  var size = 10;

  var placement = [];

  response

  //var content = response.message.content

  var content = ''

  var filter = ['end_of_text', '<|end_of_text|> ', '<|user|>', '</|user|>', '<|assistant|>', '<|system|>', '|<user|>', '<|endoftext|>', '<|system|><|endo', '<|system', '<|begin_of_text|>', '<||>']



  for await (const part of response) {



    var now = part.message.content;
    content += now


    var fin = 0;

    filter.forEach((a) => {
      if (content.includes(a)) fin = 1;
      content = S(content).replaceAll(a, '').s
    })


    if (fin == 1) {

      content

      lst = content.split('\n')

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "output ollama:" })

      lst.forEach(async (a) => {

        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })

      })


      response.abort()


      bal.slv({ olmBit: { idx: "write-ollama", src: content, lst } });
      return
    }





  }


  content

  clipboard.writeSync(content);

  lst = content.split('\n')

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "output ollama:" })

  lst.forEach(async (a) => {

    bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })

  })


  bal.slv({ olmBit: { idx: "write-ollama", src: content, lst } });
  return cpy;
};

export const inputOllama = (cpy: OllamaModel, bal: OllamaBit, ste: State) => {
  debugger;
  return cpy;
};
