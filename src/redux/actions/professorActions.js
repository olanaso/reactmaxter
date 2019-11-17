import * as types from "./actionTypes";
import * as professorApi from "../../api/professorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getProfessorSuccess(professors) {
  return { type: types.LOAD_PROFESSORS_SUCCESS, professors };
}

export function getProfessors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return professorApi
      .getProfessors()
      .then(professors => {
        dispatch(getProfessorSuccess(professors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
