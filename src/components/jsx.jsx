/* eslint-disable semi */
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Jsx() {
    let name = "yogesh" 
    const getNsme = (name)=>{
        name = "rahul"
        console.warn('name :',name)
    }
  return (
    <View>
      <Text style={{textAlign : 'center'}}> hii {name} guys</Text>
     <Button title='Press Again' onPress={()=>getNsme('yohesh ')}></Button>

     </View>
  );
}
