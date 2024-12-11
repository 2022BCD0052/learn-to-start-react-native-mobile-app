import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput
      placeholder='Enter username'
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About',{username :'yogesh'})} // Correct navigation function
      />
    </View>
  )
}

export default Login