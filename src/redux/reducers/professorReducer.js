import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function ProfessorReducer(state = initialState.professors, action) {
  switch (action.type) {
    case types.LOAD_PROFESSORS_SUCCESS:
      return action.professors;
    default:
      return state;
  }
}
