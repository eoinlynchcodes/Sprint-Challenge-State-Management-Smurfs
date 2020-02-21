import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { combineReducers, createStore } from 'redux';
import { displayReducer } from './state/reducers';

const combinedReducer = combineReducers({
    smurfDataResponse = displayReducer
})

const store = createStore({
    combinedReducer,
    
})


ReactDOM.render(<App />, document.getElementById("root"));
