/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable semi */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import styles from '../../style/style';
const Styleing = () => {
  return (
    <View>
      <Text style={{fontSize :30, color :"pink",textAlign :"center",margin:30}}> Inline Styleing</Text>
      <Text style={style.text}> Internal Styleing</Text>
      <Text style={styles.text}> External Styleing</Text>

    </View>
  )
}

const style = StyleSheet.create({
    text :{
        color: "green",
        fontSize : 44,
        margin : 33,
        textAlign : "center",
        borderWidth : 5,
        padding :14
        
    }
})
export default Styleing;