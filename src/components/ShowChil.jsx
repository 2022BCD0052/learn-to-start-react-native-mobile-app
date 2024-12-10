import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChil = () => {
    useEffect(()=>{
        console.log('i am a child')
    },[])
  return (
    <View>
      <Text>ShowChilccccccccccc</Text>
    </View>
  )
}

export default ShowChil