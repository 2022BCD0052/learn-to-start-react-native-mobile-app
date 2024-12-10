import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import ShowChil from './ShowChil';

const UseEffectHookUnmounteed = () => {
    const [showChild,setShowchild] = useState(true);

  return (
    <View>
      <Text>UseEffectHookUnmounteed</Text>
      {
        
        showChild ? <ShowChil/> : null
       }
       <Button title='Toggle' onPress={()=>setShowchild(false)}/>
    </View>
  );
};

export default UseEffectHookUnmounteed;
