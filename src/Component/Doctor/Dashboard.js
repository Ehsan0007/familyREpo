import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, DrawerLayoutAndroid, Image, TouchableHighlight, ScrollView, Switch } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2, List, ListItem } from 'native-base';
import RetroMapStyles from './../mapStyle/RetroMapStyle'
import firebase from 'firebase'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Actions } from 'react-native-router-flux'
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 24.882450;
const LONGITUDE = 67.069389;
const LATITUDE_DELTA = 0.0922;  
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        }
    }

    componentWillUnmount() {
        navigator.geolocation.getCurrentPosition((position) => {

        });
    }
    createCircle() {
        Actions.createCirle()
    }
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
        // alert(2332)
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    logout = () => {
        firebase.auth().signOut().then(function () {
            Actions.login();
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    }
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
                <Image source={{ uri: 'https://lh3.ggpht.com/lafQ8MEh6Gh0NU2GzCEhxxugOeqKTOJemc1liIga3anzvksjfCv5OY0fC6HiqsReUtw=w300' }}
                    style={{ width: 250, height: 230, marginLeft: -20 }} />
                <List>
                    <ListItem icon style={{ backgroundColor: '#ecf0f1' }}>
                        <Left>
                            <Icon name="ios-star-outline" style={{ color: 'red' }} />
                        </Left>
                        <Body>
                            <Text onPress={() => Actions.createCirle()}>Create Circle</Text>
                        </Body>

                    </ListItem>
                    <ListItem onPress={() => Actions.circleList()} icon style={{ backgroundColor: '#ecf0f1' }} >
                        <Left>
                            <Icon name="ios-star-outline" style={{ color: '#20B5E3' }} />
                        </Left>
                        <Body>
                            <Text>Circle</Text>
                        </Body>

                    </ListItem>
                    <ListItem icon style={{ backgroundColor: '#ecf0f1' }}>
                        <Left>
                            <Icon name="ios-star-outline" style={{ color: '#7C5939' }} />
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>

                    </ListItem>
                </List>

            </View>
        );
        return (
            <Container style={styles.containerStyle}>
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={220}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                >
                    <Header style={{ backgroundColor: '#fff' }}>
                        <Left>
                            <Button transparent style={styles.homebuttonStyle} onPress={this.openDrawer}  >
                                <Icon name='menu' style={{ color: 'black' }} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ marginLeft: -30, color: 'rgb(169,169,169)' }}>Family Tracking</Title>
                        </Body>
                        <Right>
                            <Text onPress={() => this.logout()} style={{color : 'black'}}>Logout</Text>
                        </Right>
                    </Header >
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.container}
                        customMapStyle={RetroMapStyles}
                        showsUserLocation={true}
                        region={this.state.region}
                    >
                        <MapView.Marker
                            coordinate={this.state.region}

                        />
                    </MapView>

                </DrawerLayoutAndroid >
            </Container >

        );
    }
}
const styles = StyleSheet.create({
    // container: {
    //     ...StyleSheet.absoluteFillObject,
    //     top: 100,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center'
    // },
    container: {
        height: '100%',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    cardStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 300,
    },

});

export default Dashboard


