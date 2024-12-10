/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';

const UseRefHook = () => {
    const myRef = useRef();
    const handleRef = () =>{
        // myRef.current.setNativeProps({
        //     style: { borderColor: 'blue', borderWidth: 2 },
        //     text : "yogesh"
        // })
        myRef.current.focus();

    }
  return (
    <View
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding :1,
        backgroundColor : "white"
        }}>

    >
      <Text>UseRefHook</Text>
      <TextInput
    ref={myRef}
      placeholder="Enter Your Name"
      style={{
        backgroundColor:'gray',
        marginBottom :13,
        borderRadius:10,
        width :"100%",
        color :'black',
        borderWidth: 2
        }}

      placeholderTextColor={'red'}
      />
      <TouchableOpacity
      style={{
        backgroundColor:'blue',
        padding:10,
        borderRadius:10,
        width : '100%',
        height :50,

        justifyContent:'center',
        alignItems:'center',



        }}
        onPress={handleRef}

      >
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefHook;
