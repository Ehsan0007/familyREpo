import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CardItem, Item, Button, Input } from 'native-base'
import { Actions } from 'react-native-router-flux'
import HeaderComp from './../header/index'

class CircleList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
        this.props.pass
    }


    render() {
        const app = this.props.List.circleList
        console.log("App", app)

        return (
            <View>
                <View style={{ backgroundColor: '#fff' }}>
                    <HeaderComp name="ios-arrow-back" header="Circle" press={() => Actions.dashboard()} />
                </View>
            </View>
        )
    }
}


export default CircleList