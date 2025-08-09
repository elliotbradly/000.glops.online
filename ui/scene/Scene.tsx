import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea } from '@mantine/core';

import RecordButton from './RecordButton'
import SelectionBox from './SelectionBox'
import Slider from './Slider'

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'

import * as ActMku from '../../111.solid/10.miku.unit/miku.action'

import * as ActScr from '../../111.solid/08.screen.unit/screen.action'

export default function Component() {

    

    setTimeout( async ()=>{
        await window['SOLID']( ActBab.OPEN_BABYLON, {src:'surface00'})
        await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku00a', src: 'slop/slop00.pmx', dat: { position: { z: -7 } } })
        await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku00a', dat: { position: { z: 40, x: -15 } } })
        await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src00' })
    }, 333)

    
    return (
        <Box>

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



            <Divider my="md" />
            <RecordButton />
            <Divider my="md" />
            <SelectionBox/>
            <Divider my="md" />
            <Slider/>



        </Box>

    );
}