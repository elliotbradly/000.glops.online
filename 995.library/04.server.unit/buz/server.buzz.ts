
import { ServerModel } from "../server.model";
import ServerBit from "../fce/server.bit";
import State from "../../99.core/state";

export const initServer = (cpy: ServerModel, bal: ServerBit, ste: State) => {
    debugger
    return cpy;
};

export const updateServer = async (cpy: ServerModel, bal: ServerBit, ste: State) => {

    if (bal == null) bal = { idx: null, src: null }

    if (bal.src == null) bal.src = '../001.alligator.quest'



    var FS = require('fs-extra')
    var path = require("path");
    var Walk = require("@root/walk");
    var S = require('string')

    var list = FS.readdirSync(bal.src);

    const pattern = /^\d{3}\.[a-zA-Z]+$/;
    const replaceList = list.filter(item => pattern.test(item));

    var output = []

    replaceList.forEach( (a)=>{

        if ( a == '999.pivot' ) return

        var endLoc = "./" + a + "/BEE.ts";
        output.push( endLoc )

    })



    function walkFunc(err, pathname, dirent) {
        if (err) {
            // throw an error to stop walking
            // (or return to ignore and keep going)
            console.warn("fs stat error for %s: %s", pathname, err.message);
            return Promise.resolve();
        }

        dirent.name
    

        if (dirent.isDirectory() && dirent.name == '97.collect.unit') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == '98.bus.unit') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == '98.menu.unit') { return Promise.resolve(false) }
        
        //if (dirent.isDirectory() && dirent.name == 'node_modules') { return Promise.resolve(false) }
        //if (dirent.isDirectory() && dirent.name == 'public') { return Promise.resolve(false) }
        //if (dirent.isDirectory() && dirent.name == 'modules') { return Promise.resolve(false) }
        //if (dirent.isDirectory() && dirent.name == '.') { return Promise.resolve(false) }


        if (dirent.isDirectory() && dirent.name.startsWith(".")) {
            return Promise.resolve(false);
        }

        if (dirent.isFile() && dirent.name.startsWith(".") == false) {

            var checks = ['buzz.ts', 'action.ts', 'buzzer.ts', 'model.ts', 'reduce.ts', 'unit.ts']

            checks.forEach( (a)=>{

                var dom = dirent.name.split('.')
                dom.shift()

                var sub = dom.join('.')

                if ( sub != a ) return

                var file = path.join(path.dirname(pathname), dirent.name);
                output.push(file)
                
            
            })


          


            //if (direct[path.dirname(pathname)] == null) direct[path.dirname(pathname)] = ''
        }

        return Promise.resolve();
    }


    var dex = 0

    var action = async () => {

        var now = replaceList[dex]

        if (now == null) {

            output

            output.forEach((a) => {

                var fileDataList = FS.readFileSync('./' + a).toString().split('\n')

                fileDataList.forEach((b, c) => {
                    if (b.includes('window[')) {
                        var newLine = S(b).replaceAll('window[', 'global[').s
                        fileDataList[c] = newLine
                    }
                })

                var fileData = fileDataList.join('\n')

                var newLocation = bal.src + '/' + a;

                FS.writeFileSync(newLocation, fileData)






            })



            bal.slv({ srcBit: { idx: "update-server" } });
            return
        }

        dex += 1;

        if (FS.existsSync("./" + now) == true) {
            await Walk.walk("./" + now, walkFunc);
            await action()
        }

        else {
            await action()
        }



    }

    await action()

    return cpy;
};

