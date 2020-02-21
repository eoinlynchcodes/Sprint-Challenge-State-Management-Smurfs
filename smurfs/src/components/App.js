import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

function App({ getSmurfs }) {



    useEffect(() => {
      getSmurfs()
    }, [])


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}


function mapStateToProps(state){
  console.log(state);
  return {
    getSmurfs: state.getSmurfs
  }
}

export default connect(
mapStateToProps,
actionCreators
)(App)