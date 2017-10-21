import React, { Component } from 'react'
import { connect } from 'react-redux';
import CircleList from './../../Component/Doctor/CircleList'
import AuthActions from './../../store/actions/authAction'

class CircleListContainer extends Component {

 
    render() {
        return <CircleList List={this.props.circleList} pass={this.props.getCircleList}/>
    }
}


function mapStateToProps(state) {
    return {
        circleList: state.circleReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCircleList: () => dispatch(AuthActions.circleList()),
    };
}
const ListContainer = connect(mapStateToProps, mapDispatchToProps)(CircleListContainer);

export default ListContainer;