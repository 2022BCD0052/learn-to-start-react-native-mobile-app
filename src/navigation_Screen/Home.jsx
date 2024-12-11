import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')} // Correct navigation function
      />
    </View>
  );
};

export default Home;
