/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button} from 'react-native';
import React from 'react';
import First from './src/components/First';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize : 30}} >react native mobile app</Text>
      <Text style={{ fontSize : 30}} >react native mobile app</Text>
      <Button title='Press Here'></Button>
      <First/>
    </View>
  );
};

export default App;
