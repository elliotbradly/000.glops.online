"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useInitTime } from '../../../queue/time.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useInitTime()

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Is the Time Pivot present?
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      opening time pivot...
    </div>
  )


}

export default Test


