import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_api = () => {
  const [mydata, setDat] = useState([]); // Initialize as an array

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((result) => {
        console.log(result.data);
        setDat(result.data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures it runs once

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Get_api</Text>
      {mydata.length > 0 ? (
        mydata.map((item) => (
          <Text key={item.id} style={{ fontSize: 16, marginVertical: 5 }}>
            {item.name}
            {item.email}
          </Text>
        ))
      ) : (
        <Text style={{ fontSize: 16, color: 'gray' }}>Loading...</Text>
      )}
    </View>
  );
};

export default Get_api;
