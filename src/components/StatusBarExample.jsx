import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style = {styles.container}>
      <Text>StatusBarExample</Text>
      <StatusBar barStyle={'light-content'}
    //   backgroundColor={'transparent'}
      translucent={true}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container :{
flex :1,
justifyContent :'center',
alignItems :'center',
backgroundColor :'green',
textAlign : 'center'

    }
})
export default StatusBarExample