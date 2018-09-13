import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./component/App";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
