/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

 const  Post_Api = () => {
    const [post, setPost] = useState({
        id: '',
        name: '',
        email: '',
      });
    
      const handleInput = (field, value) => {
        setPost({ ...post, [field]: value });
      };
    
      const handleSubmit = async () => {
        try {
          const response = await axios.post('http://10.0.2.2:3000/users', post); // Include the post data
          Alert.alert('Success', 'Data submitted successfully!');
          setPost({
            id: '',
            name: '',
            email: '',
          });
          console.log(response.data);
        } catch (error) {
          Alert.alert('Error', 'Data not submitted. Please try again.');
          console.error(error);
        }
      };
  return (
    <View>
      <Text style={{textAlign :'center'}}>Post_Api</Text>

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
        placeholder="Enter your Name"
        value={post.name}
        onChangeText={(value)=>handleInput('name',value)}
    />  <TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      }}
      placeholder="Enter your Email"
      value={post.email}
      onChangeText={(value)=>handleInput('email',value)}
  />
  <Button
  title="Submit"
  onPress={handleSubmit}

  />


    </View>
  );
};

export default Post_Api;
