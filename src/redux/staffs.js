import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = { isLoading: true, errMess: null, staffs: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };
    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs: [] };
    case ActionTypes.STAFFS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.ADD_STAFF:
      return { ...state, staffs: state.staffs.concat(action.payload) };
    case ActionTypes.DELETE_STAFF:
      return {
        ...state,
        staffs: state.staffs.filter((staff) => staff.id !== action.payload),
      };

    default:
      return state;
  }
};
