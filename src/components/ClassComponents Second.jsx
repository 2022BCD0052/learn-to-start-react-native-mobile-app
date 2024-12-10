import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import ClassComponent from './ClassComponents';

class ClassComponentSecond extends Component {
    constructor () {
        super ();
        this.state = {
            myname : 'Yogesh',
        }
    }

    updateName = ()=>{
        this.setState({myname : 'sachin'})
    }
    render (){
        return (
            <View>
                <Text>Class Component second</Text>
                <Text> name : {this.state.myname} Age : {this.props.data}</Text>
                <Button title='Update Name' onPress={this.updateName}/>
                </View>
        );
    }
}

export default ClassComponentSecond;