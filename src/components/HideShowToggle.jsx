import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import My from './My';

const HideShowToggle = () => {
    const[status,setStatus] = useState(true);
  return (
    <View>
      <Text>HideShowToggle</Text>
      {
        status ?  <My/> : null
      }
      <Button title=' hide' onPress={()=>setStatus(false)}/>
      <Button title=' show' onPress={()=>setStatus(true)}/>
      <Button title=' both' onPress={()=>setStatus(!status)}/>

      <TouchableOpacity style = {styles.button} activeOpacity={.4}>
        <Text style={styles.buttonText}>HideShowToggle</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} 
      underlayColor={'red'}
      onPress={()=>{
    console.log('gii')}
      }
      >
        <Text style={styles.buttonText}>HideShowToggle</Text>
      </TouchableHighlight>

{/* <ActivityIndicator size={'large'} color={'green'}/> */}
      </View>
  )
}

const styles = StyleSheet.create({
    button : {
        margin :20,
        backgroundColor :'#4E31aa',
        padding :20,
        borderRadius :10,
        color :'#fff',
        textAlign :'center',
        fontSize :20,
        elevation :4
    }
    ,
    buttonText : {
        fontSize :20,
        fontWeight : 'bold',
        color :'#fff',
        textAlign :'center',


    }
})

export default HideShowToggle