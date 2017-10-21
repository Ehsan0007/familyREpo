import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoginForm from '../../../Component/Auth/login'
import AuthActions from '../../../store/actions/authAction'

function mapStateToProps(state) {
    return {
        userData: state.epic,
        isLogged: state.epic.islogged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch(AuthActions.loginUser(data)),
    };
}
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginContainer;