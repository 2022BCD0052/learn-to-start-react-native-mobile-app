import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const listItem = [
    {
        title: "Fruits",
        data: [
            { id: 1, name: "Apple" },
            { id: 2, name: "Banana" },
            { id: 3, name: "Cherry" }
        ],
    },
    {
        title: "Vegetables",
        data: [
            { id: 1, name: "Broccoli" },
            { id: 2, name: "Carrot" },
            { id: 3, name: "Cucumber" }
        ],
    },
    {
        title: "Meat",
        data: [
            { id: 1, name: "Chicken" },
            { id: 2, name: "Beef" },
            { id: 3, name: "Pork" }
        ],
    }
];

const SectionLists = () => {

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{section.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <SectionList
                sections={listItem}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f8f8f8',
    },
    headerContainer: {
        padding: 15,
        backgroundColor: '#4a90e2',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    itemContainer: {
        padding: 15,
        backgroundColor: '#7ed321',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default SectionLists;