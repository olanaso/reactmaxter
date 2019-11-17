import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.course],
        total: state.total + 1
      };
    case types.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        data: state.data.map(course =>
          course.id === action.course.id ? action.course : course
        )
      };
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return {
        ...state,
        data: state.data.filter(course => course.id !== action.course.id),
        total: state.total - 1
      };
    default:
      return state;
  }
}
