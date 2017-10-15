//import liraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import StackNav from './components/router/StackNav';
// import Navigation from './components/Navigation';
// import LoginForm from './components/LoginForm';

// create a component
class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBr0-3Qys1zxkJWp4HcaKDF0HoTxRVSPJk',
            authDomain: 'manager-310cf.firebaseapp.com',
            databaseURL: 'https://manager-310cf.firebaseio.com',
            projectId: 'manager-310cf',
            storageBucket: 'manager-310cf.appspot.com',
            messagingSenderId: '998218120470'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <StackNav />
            </Provider>
        );
    }
}

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default App;
