import React, { Component } from "react";
import { Text, View } from "react-native";
import LoginForm from "./LoginForm";
import { Header, Card } from "./common";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {reducers} from './reducers'
import ReduxThunk from 'redux-thunk';

class Manage extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Card>
          <Header headerText="Authentication" />
          <LoginForm />
        </Card>
      </Provider>
    );
  }
}

const style = {
  bodyStyle: {
    flex: 1,
    backgroundColor: "#ffccff",
    paddingTop: 20
  }
};

export default Manage;
