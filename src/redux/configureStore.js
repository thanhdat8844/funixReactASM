import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./departments";
import { StaffsInDepartment } from "./staffsInDepartment";
import { Salary } from "./salary";
import thunk from "redux-thunk";
import logger from "redux-logger";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      staffsInDptm: StaffsInDepartment,
      salary: Salary,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
