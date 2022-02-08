import "./App.css";
import Main from "./components/MainComponent";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(Reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
