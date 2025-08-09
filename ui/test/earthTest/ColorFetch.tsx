"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useFetchColor } from '../../../queue/pixel.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useFetchColor()

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Fetching Color Data
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

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


