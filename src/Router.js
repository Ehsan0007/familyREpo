import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginContainer from './Container/Auth/login'
import SignupContainer from './Container/Auth/signup'
import Dashboard from './Component/Doctor/Dashboard'
import Circle from './Component/Doctor/Circle.js'
import CreateCircleContainer from './Container/Circle/circle'
import ListContainer from './Container/CircleList/index'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="auth">
                <Scene key="login" component={LoginContainer} hideNavBar={true} />
                <Scene key="signup" component={SignupContainer} hideNavBar={true} />
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} />
                <Scene key="createCirle" component={CreateCircleContainer} hideNavBar={true} />
                <Scene key="circleList" component={ListContainer} hideNavBar={true} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;