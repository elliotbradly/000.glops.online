import React from 'react'

import { Button } from '@mantine/core';
import { Box, Title, Text, Stack, Container } from '@mantine/core';

import SpaceInit from './spaceTest/SpaceInit'

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'

export default function ContentsPage() {

  setTimeout( ()=>{
    window['SOLID']( ActBab.OPEN_BABYLON, {src:'surface00'})
}, 333)



  var act00 = () => {
    document.location.href = './shade/surface-test'
  }

  var act01 = () => {
    document.location.href = './solid/open-babylon'
  }

  return (
    <Container size="md" p={0} style={{ backgroundColor: '#ab9d77', minHeight: '100vh', color: '#000' }}>
      <Box p={40}>
        <Title order={1} style={{ fontSize: 72, fontWeight: 300, marginBottom: 40 }}>
          Solid TEST
        </Title>

        <Stack >

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>


            <Box style={{
              width: '1280px',
              height: '720px',
              position: 'relative',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: "hidden"
            }}>

              <canvas id='surface00' />

            </Box>


          </Box>

        </Stack>



      </Box>
    </Container>
  );
}
