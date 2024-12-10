import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../screens/ContactListScreen/style';

const ContactItems = ({name,email,password,role}) => {
  return (
    <View style={styles.item}>
      <Text style = {styles.name}>{name}</Text>
      <Text style = {styles.email}>{email}</Text>
      <Text style = {styles.password}>{password}</Text>
      <Text style = {styles.role}>{role}</Text>
      </View>
  );
};

export default ContactItems;
