/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button} from 'react-native';
import React from 'react';
import First from './src/components/First';
import Jsx from './src/components/jsx';
import UseStateHooks from './src/components/UseStateHook';
import Styleing from './src/components/Styleing';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize : 30}} >react native mobile app</Text>
      <Text style={{ fontSize : 30}} >react native mobile app</Text>
      <Button title='Press Here'></Button>
      <First/>
      <Jsx/>
      <UseStateHooks/>
      <Styleing/>
    </View>
  );
};

export default App;
