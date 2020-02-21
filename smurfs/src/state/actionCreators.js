import * as actionTypes from './actionTypes';
import axios from 'axios';

const smurfsAPI = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
    axios.get(smurfsAPI)
    .then(response => {
        console.log(response.data);
        dispatch({
            type: actionTypes.GET_SMURF_DATA,
            payload: response.data
        })
        .catch(error => {
            dispatch({
            type: actionTypes.SET_ERROR,
            payload:error.message })
        })
        .finally(() => {
            dispatch({ type: actionTypes.GET_SMURF_DATA})
        })
    })
}