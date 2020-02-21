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
  // smurfFormData,
  formValues
}) {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  const onSubmit = event => {
    event.preventDefault();
    postNewSmurf({
      name: formValues.name,
      age: formValues.age,
      height: formValues.height

      // When I replce the values above, and click submit, it sends the correct data. 
      // But when I do it through the form, it doesn't...
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
        name="name"
        value={formValues.name}
        onChange={onChange}
        />

        <label>Age:</label>
        <input 
        placeholder="Age:"
        name="age"
        value={formValues.age}
        onChange={onChange}
        />

        <label>Height:</label>
        <input 
        placeholder="Height:"
        name="height"
        value={formValues.height}
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
    formValues: state.formValues,
    // smurfFormData: state.smurfFormData
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(App);
