/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Delete_Api = () => {
  const [id, setId] = useState('');

  const handlePress = async () => {
    if (!id) {
      Alert.alert('Error', 'Please enter a valid ID.');
      return;
    }

    try {
      const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
      Alert.alert('Success', 'Data deleted successfully');
      console.log(response.data);

      setId(''); // Reset the ID input field
    } catch (error) {
      Alert.alert('Error', 'Failed to delete data. Please try again.');
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={{ textAlign: 'center', margin: 22 }}>Delete_Api</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 10,
        }}
        placeholder="Enter the ID to delete"
        value={id}
        onChangeText={(value) => setId(value)} // Update the ID state
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

export default Delete_Api;
