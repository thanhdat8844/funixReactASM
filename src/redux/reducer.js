import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
};
const Reducer = (state = initialState, action) => {
  return state;
};
export default Reducer;
