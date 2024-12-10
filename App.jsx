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
import ContactListScreen from './src/screens/ContactListScreen/ContactListScreen';
import Grid from './src/components/Grid';
import ClassComponent from './src/components/ClassComponents';
import UseEffectHookUnmounteed from './src/components/UseEffectHookUnmounteed';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 10 }}>
          React Native Mobile App
        </Text>
        <Button title="Press Here" onPress={() => alert('Button Pressed')} />
        <First />
        <Jsx />
        <UseStateHooks />
        <Styleing />
        <FlatlistScreen />
        <SectionLists />
        <LoginForm />
        <ContactListScreen />
      </ScrollView> */}
              {/* <Grid /> */}
              {/* <ClassComponent/> */}
              <UseEffectHookUnmounteed/>

    </View>
  );
};

export default App;
