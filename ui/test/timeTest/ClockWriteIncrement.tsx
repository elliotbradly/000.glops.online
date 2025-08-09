"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useWriteClockIncrement } from '../../../queue/time.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useWriteClockIncrement('increment0', {sec:6 })

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Write Clock Increment
      </Text>

      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      writing clock...
    </div>
  )


}

export default Test


