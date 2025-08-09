import React from 'react'

import { Button } from '@mantine/core';
import { Box, Title, Text, Stack, Container } from '@mantine/core';


export default function ContentsPage() {


  var act00 = () => {
    document.location.href = './test/earth'
  }

  var act01 = () => {
    document.location.href = './test/control'
  }

  var act02 = () => {
    document.location.href = './test/space'
  }

  var act03 = () => {
    document.location.href = './test/time'
  }

  var act04 = () => {
    document.location.href = './test/shade'
  }

  var act05 = () => {
    document.location.href = './play'
  }



  return (
    <Container size="md" p={0} style={{ backgroundColor: '#ab9d77', minHeight: '100vh', color: '#000' }}>
      <Box p={40}>
        <Title order={1} style={{ fontSize: 72, fontWeight: 300, marginBottom: 40 }}>
          TESTING
        </Title>

        <Title order={2} style={{ fontSize: 24, fontWeight: 500, marginBottom: 40 }}>
          PRIMAL.MAMA
        </Title>


        <Text>--------------------------------------------------------------------------------------------------------------------------------------------------------</Text>


        <Stack >

          

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" onClick={act05} > OPEN SOLID TEST </Button>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" onClick={act01} > OPEN CONTROL TEST </Button>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" onClick={act03} > OPEN TIME TEST </Button>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" onClick={act00} > OPEN EARTH TEST </Button>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" onClick={act02} > OPEN SPACE TEST </Button>
          </Box>

        </Stack>


      </Box>
    </Container>
  );
}
