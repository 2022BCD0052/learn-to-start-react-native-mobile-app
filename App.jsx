import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/navigation_Screen/Home';
import About from './src/navigation_Screen/About';
import Contact from './src/navigation_Screen/Contact';
import Login from './src/navigation_Screen/Login';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
headerStyle :css.header,
headerTitleStyle :css.HeaderTitle,
headerTintColor :'blue',
contentStyle :css.screen
      }}
      >
        
      <Stack.Screen name="Login" component={Login} 
      options={{
        title:"my Login Title"
      }}
      />
      {/* <Stack.Screen name="Home page " component={Home} options={{headerShown :false}}/> */}
      <Stack.Screen name="About" component={About} />
      {/* <Stack.Screen name="Contact page " component={Contact} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const css = StyleSheet.create({
  header :{
    backgroundColor :"red",

  },
  HeaderTitle :{
    fontWeight :'bold',
    fontSize :20,

  },
  screen :{
    flex :1,
    justifyContent :'center',
    backgroundColor :"green"

  }

})