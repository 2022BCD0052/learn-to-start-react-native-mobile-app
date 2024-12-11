import { View, Text, Button, ScrollView, Platform } from 'react-native';
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
import HideShowToggle from './src/components/HideShowToggle';
import StatusBarExample from './src/components/StatusBarExample';
import UseRefHook from './src/components/UseRefHook';
import ModalDialogBox from './src/components/ModalDialogBox';
import AlertExample from './src/component2/AlertExample';
import Get_api from './src/component2/Get_api';
import Post_Api from './src/component2/Post_Api';
import Petch_Api from './src/component2/Petch_api';
import Delete_Api from './src/component2/Delete_Api';
import Put_api from './src/component2/Put_api';
import Get_Api_List from './src/component2/Get_Api_List';
import PlatformExample from './src/component2/PlatformExample';
import Search from './src/component2/Search';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 10 }}>
          React Native Mobile App
        </Text>
        <Button title="Press Here" onPress={() => alert('Button Pressed')} />
        {/* Uncomment the components you want to render */}
        {/* <First /> */}
        {/* <Jsx /> */}
        {/* <UseStateHooks /> */}
        {/* <Styleing /> */}
        {/* <FlatlistScreen /> */}
        {/* <SectionLists /> */}
        {/* <LoginForm /> */}
        {/* <ContactListScreen /> */}
        {/* <Grid /> */}
        {/* <ClassComponent /> */}
        {/* <UseEffectHookUnmounteed /> */}
        {/* <HideShowToggle /> */}
        {/* <StatusBarExample /> */}
        {/* <UseRefHook /> */}
        {/* <ModalDialogBox /> */}
        {/* <AlertExample /> */}
        {/* <Get_api /> */}
        {/* <Post_Api /> */}
        {/* <Put_api /> */}
        {/* <Petch_Api /> */}
        {/* <Delet e_Api /> */}
        {/* <Get_Api_List/> */}
        {/* <PlatformExample/> */}
        <Search/>

      </ScrollView>
    </View>
  );
};

export default App;
