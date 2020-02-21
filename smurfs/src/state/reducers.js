import * as actionTypes from "./actionTypes";

const initialSmurfState = [];
export function displayReducer(state = initialSmurfState, action) {
  switch (action.type) {
    case actionTypes.GET_SMURF_DATA:
      return action.payload;
    case actionTypes.SET_ERROR:
      return "There is an error";
    default:
      return state;
  }
}

// const initialFormState = {
//   name: "",
//   age: "",
//   height: ""
// };
// export function formReducer(state = initialFormState, action) {
//   switch (action.type) {
//     case actionTypes.INPUT_CHANGE:
//       return {
//         ...state,
//         [action.payload.inputName]: action.payload.inputValue
//       };
//     case actionTypes.RESET_FORM:
//       return initialFormState;
//     default:
//       return state;
//   }
// }
