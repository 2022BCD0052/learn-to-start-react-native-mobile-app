import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {id: 1, title: 'item1'},
  {id: 2, title: 'item2'},
  {id: 3, title: 'item3'},
  {id: 4, title: 'item4'},
  {id: 5, title: 'item5'},
  {id: 6, title: 'item6'},
  {id: 7, title: 'item7'},
  {id: 8, title: 'item8'},
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9a0', // Corrected Hex Color
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#e0e0e0', // Added basic styling for item container
    borderRadius: 5,
    alignContent : 'center',
    width : '48%',
    alignItems :'center',
    justifyContent :'center',
    height : 100,

  },
  container :{
    flexWrap : 'wrap',
    flexDirection : 'row',
    justifyContent : 'space-between',
padding :10,
gap :10

  },
  gridItem :{

  }
});

export default Grid;
