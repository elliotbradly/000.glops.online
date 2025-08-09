import React from 'react'

import { Button } from '@mantine/core';
import { Box, Title, Text, Stack, Container } from '@mantine/core';

import EarthInit from './earthTest/EarthInit'

export default function ContentsPage() {


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
          EARTH TEST
        </Title>

        <Text>--------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

        <Stack >

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <EarthInit/>
          </Box>

          

        </Stack>

        

      </Box>
    </Container>
  );
}
