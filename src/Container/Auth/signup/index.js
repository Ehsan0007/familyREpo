import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignUp from '../../../Component/Auth/signup'
import AuthActions from '../../../store/actions/authAction'

function mapStateToProps(state) {
    return {
        userData: state.epic
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signup: (data) => dispatch(AuthActions.signupUser(data))
    }
}
const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignupContainer;