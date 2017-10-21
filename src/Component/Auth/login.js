import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import HeaderComp from './../header/index'
import * as firebase from 'firebase';
import { Image, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import AuthActions from '../../store/actions/authAction'
import axios from 'axios'
class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            (user) ? Actions.dashboard() : Actions.login()
        })
    }
    onButtonPress() {
        const { username, password } = this.state;
        if (username && password) {
            const obj = { username, password }
            this.props.login(obj)
        }
        else {
            alert("Insert Unfill Data");
        }
    }


    renderButton() {
        if (this.props.userData.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button full style={styles.button} onPress={() => this.onButtonPress()}>
                <Text>Login</Text>
            </Button>
        );
    }
    render() {
        return (
            <Container>
                <HeaderComp header="Login" />
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(value) => this.setState({ username: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(value) => this.setState({ password: value })} />
                        </Item>
                        <Text style={styles.error}>
                            {this.props.userData.error}
                        </Text>
                        {this.renderButton()}
                        <View style={styles.view}>
                            <Text style={styles.create} onPress={() => Actions.signup()}>Create Account</Text>
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

export default LoginForm;