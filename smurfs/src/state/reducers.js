import * as actionTypes from './actionTypes';


// This initial state may need to become an empty array!!!
// const initialSmurfState = {
//     name: '',
//     age: '',
//     height: '',
//     id: ''
// }

const initialSmurfState = [];

export function displayReducer(state = initialSmurfState, action){
    switch(action.type){
        case actionTypes.GET_SMURF_DATA:
            return state
        case actionTypes.SET_ERROR:
            return 'There is an error';
        default: 
        return state
    }
}