import { View, Text } from 'react-native';
import React, { Component } from 'react';
import ClassComponentSecond from './ClassComponents Second';

class ClassComponent extends Component {
    render (){
        const age = 22;
        return (
            <View>
                <Text>Class Component</Text>
                <ClassComponentSecond data= {age}/>
            </View>
        );
    }
}

export default ClassComponent;