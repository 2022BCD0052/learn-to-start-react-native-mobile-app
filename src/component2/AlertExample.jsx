import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React from 'react';

const AlertExample = () => {
  const ShowAlert = () => {
    Alert.alert(
      'Alert Title', 
      'Alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        cancelable: false, // Prevent dismissing the alert by tapping outside
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert Example</Text>

      <TouchableOpacity onPress={ShowAlert} style={styles.button}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
