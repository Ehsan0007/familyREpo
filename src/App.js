import React, { Component } from 'react';
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import Router from './Router';
import { store } from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App