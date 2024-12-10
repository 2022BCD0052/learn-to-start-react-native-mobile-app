import { View, Text, Button } from 'react-native'
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
      </View>
  )
}

export default HideShowToggle