import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Search = () => {
  const contacts = [
    { id: 1, name: 'Yogesh' },
    { id: 2, name: 'Sachin' },
    { id: 3, name: 'Sahil' },
    { id: 4, name: 'Esfh' },
    { id: 5, name: 'Atul' },
  ];

  const [search, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={Styles.item}>
      <Text style={Styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>Search Contacts</Text>
      <TextInput
        style={Styles.input}
        placeholder="Type a name to search"
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearchQuery}
      />
      {filteredContacts.length > 0 ? (
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={Styles.listContainer}
        />
      ) : (
        <Text style={Styles.noResults}>No contacts found</Text>
      )}
    </View>
  );
};

export default Search;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 20,

  },
  item: {
    padding: 10,
    borderWidth: 1,
    margin :5,
    borderRadius :33
  },
  itemText: {
    fontSize: 16,
  },
  noResults: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
});
