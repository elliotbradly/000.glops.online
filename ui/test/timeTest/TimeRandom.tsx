"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useRandomTime } from '../../../queue/time.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useRandomTime('clk00')

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Random Time
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      randoming time...
    </div>
  )


}

export default Test


