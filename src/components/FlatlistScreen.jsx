import { View, Text, FlatList } from 'react-native'
import React from 'react'

const data  = [
    {id :1, title : 'item1'},
    {id :2, title : 'item2'},
    {id :3, title : 'item3'},

    {id :4, title : 'item4'},
    {id :5, title : 'item5'},
    {id :6, title : 'item6'},
    {id :7, title : 'item7'},
    {id :8, title : 'item8'},


]
const FlatlistScreen = () => {
    const renderItem = ({item})=>(
        <View style={{margin:10, padding:10, backgroundColor:'lightblue'}}>
            <Text style={{fontSize:20, color:'black'}}>{item.title}</Text>
        </View>
    )
  return (
    <View>
        <FlatList data={data}
        renderItem={renderItem}
         keyExtractor={item => item.id }/>
  </View>
  )
}

export default FlatlistScreen