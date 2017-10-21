import React, { Component } from 'react'
import { connect } from 'react-redux';
import Circle from './../../Component/Doctor/Circle'
import AuthActions from './../../store/actions/authAction'

class CircleContainer extends Component {
    render() {
        return <Circle circlename={this.props.circle} suceess={this.props.circleData} error={this.props.error}/>
    }
}


function mapStateToProps(state) {
    return {
        circleData: state.circleReducer.success,
        error: state.circleReducer.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        circle: (data) => dispatch(AuthActions.circle(data)),
    };
}
const CreateCircleContainer = connect(mapStateToProps, mapDispatchToProps)(CircleContainer);

export default CreateCircleContainer;