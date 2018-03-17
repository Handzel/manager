import React, { Component } from 'react';
// import {
//   Text,
//   View
// } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDbK9TezobhGA8Y5LCGoz7vrgFnqAD3FyQ',
      authDomain: 'manager-36570.firebaseapp.com',
      databaseURL: 'https://manager-36570.firebaseio.com',
      projectId: 'manager-36570',
      storageBucket: 'manager-36570.appspot.com',
      messagingSenderId: '43958026696'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
