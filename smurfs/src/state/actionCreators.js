import * as actionTypes from "./actionTypes";
import axios from "axios";

const smurfsAPI = "http://localhost:3333/smurfs";
export const getSmurfs = () => dispatch => {
  axios
    .get(smurfsAPI)
    .then(response => {
      dispatch({
        type: actionTypes.GET_SMURF_DATA,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: error.message
      });
    });
};

export function changeInput({ inputName, inputValue }){
    return {
        type: actionTypes.INPUT_CHANGE,
        payload: { inputName, inputValue }
    }
}

export const postNewSmurf = ({ name, age, height }) => dispatch => {
    axios.post(smurfsAPI, {
        name,
        age,
        height
    })
    .then(response => {
        dispatch({
            type: actionTypes.SET_POSTED_SMURF,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error);
    })
}
