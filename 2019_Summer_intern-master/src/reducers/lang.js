import * as types from "../actions/ActionTypes";

const initialState = {};

export default function lang(state = initialState, action) {
  if (action.type == types.SET_KOR) {
    return {
      ...state,
      text: action.text
    };
  } else if (action.type == types.SET_ENG) {
    return {
      ...state,
      text: action.text
    };
  } else {
    return state;
  }
}
