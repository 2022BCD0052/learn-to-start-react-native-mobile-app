import { useState } from 'react';
import { View, Text, Button } from 'react-native';
export default function UseStateHooks() {
  const [name, setname] =useState('yogesh');
  const updateName = ()=>{
    setname('sachin');
  };
  return (
    <View>
      <Text> use state hook ka use  because to chane the value</Text>
      <Text>Name :{name} </Text>
      <Button title='Change' onPress={updateName}></Button>
     </View>
  );
}
