import React, { Component } from "react";
import { Text, View } from "react-native";
import LoginForm from "./LoginForm";
import { Header, Card } from "./common";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {reducers} from './reducers'

class Manage extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
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
