import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from '../state/actionCreators';
import { SmurfTemplate } from "./SmurfTemplate";

function App( {
  getSmurfs,
  dataToDisplay, 
  changeInput,
  postNewSmurf,
  smurfFormData,
  formValues
}) {
  useEffect(() => {
    getSmurfs();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    postNewSmurf({
      name: smurfFormData.name,
      age: smurfFormData.age,
      height: smurfFormData.height
    })
  }

  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value
    })
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
        {dataToDisplay.map((item, key) => {
          return <SmurfTemplate item={item} key={key} />;
        })}

      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input 
        placeholder="Name:"
        value={smurfFormData.name}
        onChange={onChange}
        />

        <label>Age:</label>
        <input 
        placeholder="Age:"
        value={smurfFormData.age}
        onChange={onChange}
        />

        <label>Height:</label>
        <input 
        placeholder="Height:"
        value={smurfFormData.height}
        onChange={onChange}
        />
        <input type="submit"/>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    dataToDisplay: state.dataToDisplay,
    formValues: state.formReducer,
    smurfFormData: state.smurfFormData
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(App);
