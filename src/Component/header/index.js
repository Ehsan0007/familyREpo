import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


class HeaderComp extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#fff' }}>
                <Left>
                    <Button transparent>
                        <Icon name={this.props.name} onPress={this.props.press} style={{color : 'black'}}></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title><Text style={{color : 'rgb(128,128,128)'}}>{this.props.header}</Text></Title>
                </Body>
            </Header>
        )
    }
}
export default HeaderComp;