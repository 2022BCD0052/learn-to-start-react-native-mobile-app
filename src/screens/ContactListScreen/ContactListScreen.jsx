import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { users } from './userContactInfo';
import ContactItems from '../../components/ContactItems';
import { styles } from './style';

const ContactListScreen = () => {
    const renderItem = ({item})=> <ContactItems name={item.name} email={item.email} password={item.password} role={item.role}/>;
  return (
   <FlatList
   data = {users}
   renderItem={renderItem}
   keyExtractor={item=>item.id}
   contentContainerStyle ={styles.list}
   ListHeaderComponent={<Text style={styles.heading}>Contact Information</Text>}
   />
  );
};

export default ContactListScreen;
