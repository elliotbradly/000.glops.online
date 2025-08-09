"use client"
import { Text, Divider } from '@mantine/core'

import React from 'react'
import { useUpdateEarth } from '../../queue/earth.query'

import { Box, ScrollArea, Center } from '@mantine/core';

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'

import * as ActMku from '../../111.solid/10.miku.unit/miku.action'

import * as ActScr from '../../111.solid/08.screen.unit/screen.action'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useUpdateEarth()

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    //now you can do what ever you want to with the data

    setTimeout(async () => {
      await window['SOLID'](ActBab.OPEN_BABYLON, { src: 'surface00' })

      for (var i = 0; i < 100; i++) {


        var idx = 'milu' + i 
        var pos = i * 10;

        await window['SOLID'](ActMku.WRITE_MIKU, { idx, src: 'glop/000.pmx', dat: { position: { z: -7 } } })
        await window['SOLID'](ActMku.WRITE_MIKU, {  idx, dat: { position: { z: 40, x: pos, y: -16 } } })




      }




      //await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku01a', src: 'slop/slop00.pmx', dat: { position: { z: -7 } } })
      //await window['SOLID'](ActMku.WRITE_MIKU, { idx: 'mku01a', dat: { position: { z: 40, x: 35, y: -16 } } })

      //await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src00' })
      //await window['SOLID'](ActScr.WRITE_SCREEN, { idx: 'src00', dat: { position: { z: 40, x: -35, y: -16 }, rotation: { z: 0, x: 0, y: 0 } } })




    }, 333)

    return (<div>

      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Is the Earth Pivot present?
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>


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






      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      opening...
    </div>
  )


}

export default Test
