import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea, Center } from '@mantine/core';


import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'

import * as ActMku from '../../111.solid/10.miku.unit/miku.action'

import * as ActScr from '../../111.solid/08.screen.unit/screen.action'

export default function Component() {

    setTimeout( async ()=>{
        await window['SOLID']( ActBab.OPEN_BABYLON, {src:'surface00'})
        await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku00a', src: 'slop/003.pmx', dat: { position: { z: -7 } } })
        await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku00a', dat: { position: { z: 40, x: -15, y:-16 } } })
        
        await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku01a', src: 'slop/slop00.pmx', dat: { position: { z: -7 } } })
        await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku01a', dat: { position: { z: 40, x: 35, y:-16 } } })
        
        await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src00' })
        await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src00', dat: { position: { z: 40, x: -35, y:-16 }, rotation: { z: 0, x: 0, y:0 } } })
  
        await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src01' })
        await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src01', dat: { position: { z: 40, x: 35, y:-16 } } } )
   
        

    }, 333)

    
    return (

        <Center maw={1920} h={1080} bg="var(--mantine-color-green-light)">
        <Box bg="var(--mantine-color-red-light)">


        <Box style={{
                width: '1920px',
                height: '1080px',
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: "hidden"
            }}>

                <canvas id='surface00' />

            </Box>


        </Box>
      </Center>

        

    );
}