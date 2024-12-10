/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Put_api = () => {
    const [post, setPost] = useState({
        id: '',
        name: '',
        email: '',
      });
      const handleInput = (field,value)=>{
        setPost({...post,[field]:value})
      }
    const HandlePress = async() =>{
        try {
                    const response = await axios.put(`http://10.0.2.2:3000/users/${post.id}`,{
                        name: post.name,
                        email: post.email,

                    }); // Include the post data
                    Alert.alert('Error', 'Data Updated');

                    console.log(response.data);
                    setPost({
                        id: '',
                        name: '',
                        email: '',
                      });



        } catch (error) {
            Alert.alert('Error', 'Data not Updated. Please try again.');

            console.error(error);

            
        }


  }
  return (
    <View>
      <Text style={{textAlign:'center',margin :22}}>Put_api</Text>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        }}
        placeholder="Enter your Id"
        value={post.id}
        onChangeText={(value)=>handleInput('id',value)}
    
          />
             <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        }}
        placeholder="Enter your name"
        value={post.name}
        onChangeText={(value)=>handleInput('name',value)}
    
          />
             <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        }}
        placeholder="Enter your email"
        value={post.email}
        onChangeText={(value)=>handleInput('email',value)}
    
          />
          <Button
          title="Submit"
          onPress={HandlePress}

          />
    </View>
  )
}

export default Put_api