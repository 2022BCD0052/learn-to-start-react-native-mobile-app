import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = 'Home' />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App