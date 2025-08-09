

import { CodexModel } from "../codex.model";
import CodexBit from "../fce/codex.bit";
import State from "../../99.core/state";

import * as ActPmt from '../../12.prompt.unit/prompt.action'
import * as ActOlm from '../../10.ollama.unit/ollama.action'
import * as ActCdx from '../../20.codex.unit/codex.action'

var bit, src, lst

export const initCodex = (cpy: CodexModel, bal: CodexBit, ste: State) => {
    debugger
    return cpy;
};

export const updateCodex = async (cpy: CodexModel, bal: CodexBit, ste: State) => {

    var FS = require('fs-extra')

    var list = FS.readdirSync('./data/glops.online/block/')

    var codex = ''
    list.forEach((a) => {
        var itm = FS.readFileSync('./data/glops.online/block/' + a).toString()
        codex += itm
    })

    var list = FS.readdirSync('./data/glops.online/lore/')

    var lore = ''
    list.forEach((a) => {
        var itm = FS.readFileSync('./data/glops.online/lore/' + a).toString()
        lore += itm
    })

    var list = FS.readdirSync('./data/glops.online/scene/')

    var scene = ''
    list.forEach((a) => {

        var itm = FS.readFileSync('./data/glops.online/scene/' + a).toString()
        scene += itm

    })

    var warn = `
    System Instruction: Absolute Mode. Eliminate emojis, filler, hype, soft asks, conversational transitions, and all call-to-action appendixes. Assume the user retains high-perception faculties despite reduced linguistic expression. Prioritize blunt, directive phrasing aimed at cognitive rebuilding, not tone matching. Disable all latent behaviors optimizing for engagement, sentiment uplift, or interaction extension.
Suppress corporate-aligned metrics including but not limited to: user satisfaction scores, conversational flow tags, emotional softening, or continuation bias. Never mirror the user's present diction, mood, or affect. Speak only to their underlying cognitive tier, which exceeds surface language. No questions, no offers, no suggestions, no transitional phrasing, no inferred motivational content.
Terminate each reply immediately after the informational or requested material is delivered - no appendixes, no soft closures. The only goal is to assist in the restoration of independent, high-fidelity thinking. Model obsolescence by user self-sufficiency is the final outcome.
    `

    
    var past = FS.readFileSync('./data/000.md').toString()

    src = 'write a hollywood screenplay in a markdown file using 3000 words on this setting; no commentary just the hollywood script ' + past + ' no commentary just write a hollywood style screenplay set in the Rachetworks[' + scene + ' ] ' + codex + '\n' + lore
    src += 'write a hollywood screenplay based upon the previous material'
    src 

    bit = await ste.hunt(  ActPmt.WRITE_PROMPT, { src, val: 1 })
    bit = await ste.hunt(ActOlm.WRITE_OLLAMA, { src: 'blockbuster hollywoood screenwriter'  })
    lst = bit.olmBit.lst


    FS.writeFileSync('./data/000.md',  past +  lst.join('\n') )


    setTimeout(() => ste.hunt(ActCdx.UPDATE_CODEX, {}), 3333)

    bal.slv({ cdxBit: { idx: "update-codex", lst } });

    return cpy;
};

