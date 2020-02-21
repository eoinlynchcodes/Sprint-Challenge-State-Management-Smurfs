import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { displayReducer } from './state/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    thisGoesFromCombinedReducerTomapStateToProps: displayReducer
})

const store = createStore(
    combinedReducer,
    {}, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
