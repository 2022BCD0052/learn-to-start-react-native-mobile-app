import { View, Text, Button, ScrollView } from 'react-native';
import React from 'react';
import First from './src/components/First';
import Jsx from './src/components/jsx';
import UseStateHooks from './src/components/UseStateHook';
import Styleing from './src/components/Styleing';
import FlatlistScreen from './src/components/FlatlistScreen';
import SectionLists from './src/components/SectionList';
import styles from './style/style';
import LoginForm from './src/components/LoginForm';

const App = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Your components */}
      {/* <Text style={{ fontSize: 30 }}>React Native Mobile App</Text> */}
      {/* <Button title="Press Here" /> */}
      {/* <First /> */}
      {/* <Jsx /> */}
      {/* <UseStateHooks /> */}
      {/* <Styleing /> */}
      {/* <FlatlistScreen /> */}
      {/* <SectionLists /> */}
      <LoginForm/>

    </ScrollView>
  );
};

export default App;
