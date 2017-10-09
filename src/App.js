/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyACn2EOI1cJliPOzNkXr0ZgiHqvUxbZJvM',
        authDomain: 'manager-6c31c.firebaseapp.com',
        databaseURL: 'https://manager-6c31c.firebaseio.com',
        projectId: 'manager-6c31c',
        storageBucket: 'manager-6c31c.appspot.com',
        messagingSenderId: '1020706008419'
      });
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider >
    );
  }
}
