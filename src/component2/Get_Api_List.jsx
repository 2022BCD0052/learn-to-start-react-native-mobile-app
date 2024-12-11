import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Get_Api_List = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data using GET request
    axios
      .get('http://10.0.2.2:3000/users')
      .then((response) => {
        setPosts(response.data); // Save the data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.emailText}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Get API List</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()} // Ensure a valid key
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    elevation: 1, // Add a slight shadow for Android
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Get_Api_List;
