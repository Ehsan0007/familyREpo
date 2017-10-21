import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import HeaderComp from './../header/index'
import { Image, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.userData.isRegistered) {
            Actions.login();
        }
    }
    onButtonPress() {
        const { firstName, lastName, username, password } = this.state;
        if (firstName && lastName && username && password) {
            const obj = { firstName, lastName, username, password }
            this.props.signup(obj);
        }
        else {
            alert("Insert Unfill Data");
        }
    }
    renderButton() {
        if (this.props.userData.loading) {
            return <Spinner size="large" />
        }
        return (<Button full style={styles.button} onPress={() => this.onButtonPress()}>
            <Text>Register</Text>
        </Button>)
    }
    renderError() {
        return (<Text style={styles.error}>
            {this.props.userData.error}
        </Text>)
    }
    render() {
        // const data = this.props.userData;
        return (
            <Container>
                <HeaderComp name="ios-arrow-back" header="Signup" press={() => Actions.login()} />
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>FirstName</Label>
                            <Input onChangeText={(value) => this.setState({ firstName: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>LastName</Label>
                            <Input onChangeText={(value) => this.setState({ lastName: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(value) => this.setState({ username: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(value) => this.setState({ password: value })} />
                        </Item>
                        {this.renderError()}
                        {this.renderButton()}
                        <View style={styles.view}>
                            <Text style={styles.create} onPress={() => Actions.login()}>Back</Text>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    form: {
        marginTop: 20
    },
    login: {
        marginTop: 20
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    create: {
        marginTop: 10,
    },
    button: {
        marginTop: 10
    },
    error: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red'
    }
});
export default SignUp;