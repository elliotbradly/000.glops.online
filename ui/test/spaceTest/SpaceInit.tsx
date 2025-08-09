"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useInitSpace } from '../../../queue/space.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useInitSpace()

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Is the Space Pivot present?
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      opening space pivot...
    </div>
  )


}

export default Test


