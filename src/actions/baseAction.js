import * as actionTypes from "./actionTypes";

export const setTriangleType = type => dispatch => {
  dispatch({
    type: actionTypes.SET_TRIANGLE_TYPE,
    payload: type
  });
};
