import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CardItem, Item, Button, Input } from 'native-base'
import { Actions } from 'react-native-router-flux'
import HeaderComp from './../header/index'

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circle: ''
        }
    }

    handleSubmit() {
        const data = this.state.circle;
        this.props.circlename(data);
        (this.props.suceess) ? Actions.dashboard() : <Text style={{ color: 'red' }}>{this.props.error}</Text>
    }
    render() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <HeaderComp name="ios-arrow-back" header="Create Circle" press={() => Actions.dashboard()} />
                <CardItem style={{ justifyContent: 'center' }}>
                    <Text>Enter Your Circle Name :</Text>
                </CardItem>
                <CardItem>
                    <Item style={{ width: '50%', marginLeft: '25%' }}>
                        <Input placeholder="Enter Circle Name" onChangeText={(val) => this.setState({ circle: val })} />
                    </Item>
                </CardItem>
                <CardItem>
                    <Button onPress={() => this.handleSubmit()} rounded style={{ width: '50%', justifyContent: 'center', marginLeft: '25%', backgroundColor: '#FF69B4' }}>
                        <Text style={{ color: 'white' }}>Create</Text>
                    </Button>
                </CardItem>
            </View>
        )
    }
}


export default Circle