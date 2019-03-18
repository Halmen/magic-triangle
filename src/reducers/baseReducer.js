import * as actionTypes from "../actions/actionTypes";

export default (
  state = { triangle_type: "Bill hasn't decided yet" },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_TRIANGLE_TYPE:
      return {
        triangle_type: action.payload
      };
    default:
      return state;
  }
};
