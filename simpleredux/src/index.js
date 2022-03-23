import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import App from './App';
import { store } from "./store"; //New add
import * as serviceWorker from './serviceWorker';

/*const render = function() {
   ReactDOM.render(<App />, document.getElementById("root")
},
//render()
store.subscribe(render);*/ //wrong code

const render = () => ReactDOM.render(<App />, document.getElementById("root"));
render();  //This line need
store.subscribe(render)  //Last add to display button text

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
