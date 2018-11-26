import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {

        var config = {
            apiKey: "AIzaSyDwlhvj0y5EjEvosMo5ogfOD6Kj3Ky3tRA",
            authDomain: "manager-5ce30.firebaseapp.com",
            databaseURL: "https://manager-5ce30.firebaseio.com",
            projectId: "manager-5ce30",
            storageBucket: "manager-5ce30.appspot.com",
            messagingSenderId: "271825223108"
        };
        firebase.initializeApp(config);

    }


    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;