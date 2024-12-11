import { View, Text } from 'react-native'
import React from 'react'

const About = (props) => {
  const {username} = props.route.params
  console.log(props.route.params)

  return (
    <View>
      <Text>About : {username}</Text>
    </View>
  )
}

export default About