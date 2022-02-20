import * as ActionTypes from "./ActionTypes";

export const StaffsInDepartment = (
  state = { isLoading: true, errMess: null, staffsInDptm: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS_IN_DPTM:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffsInDptm: action.payload,
      };
    case ActionTypes.STAFFS_IN_DPTM_LOADING:
      return { ...state, isLoading: true, errMess: null, staffsInDptm: [] };
    case ActionTypes.STAFFS_IN_DPTM_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
