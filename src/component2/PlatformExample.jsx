import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PlatformExample = () => {
  return (
    <View style={Styling.Container}>
      <Text style={Styling.welcomeText}>Welcome to the Platform Example</Text>
      <Text style={Styling.platformText}>
        {Platform.OS === 'ios' ? 'Welcome iOS User!' : 'Welcome Android User!'}
      </Text>
    </View>
  );
};

export default PlatformExample;

const Styling = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  platformText: {
    fontSize: 16,
    color: '#fff',
  },
});
