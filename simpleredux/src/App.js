import React, { Component } from 'react';
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";
//import reducer from "./reducers";
//import { createStore } from "redux";

//const initialState = { tech: "Zelda " };
//const store = createStore(reducer, initialState);

class App extends Component {
// the state object has been removed.   
render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech}/>,
      <ButtonGroup key={2} technologies={["Zelda", "React-Native", "Redux"]} />
    ];
  }
}
export default App;
