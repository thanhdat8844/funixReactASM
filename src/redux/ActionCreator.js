import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//Fetch Staffs
export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)))
    .catch((error) => dispatch(staffsFailed(error.message)));
};
export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});
export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});
export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

//Fetch Departments
export const fetchDptms = () => (dispatch) => {
  dispatch(dptmsLoading(true));
  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((dptms) => dispatch(addDptms(dptms)))
    .catch((error) => dispatch(dptmsFailed(error.message)));
};
export const dptmsLoading = () => ({
  type: ActionTypes.DPTMS_LOADING,
});
export const dptmsFailed = (errmess) => ({
  type: ActionTypes.DPTMS_FAILED,
  payload: errmess,
});
export const addDptms = (dptms) => ({
  type: ActionTypes.ADD_DPTMS,
  payload: dptms,
});

export const fetchStaffsInDptm = (dptmId) => (dispatch) => {
  dispatch(staffsInDptmLoading(true));
  return fetch(baseUrl + "departments/" + dptmId)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((staff) => dispatch(addStaffsInDptm(staff)))
    .catch((error) => dispatch(staffsInDptmFailed(error.message)));
};
export const staffsInDptmLoading = () => ({
  type: ActionTypes.STAFFS_IN_DPTM_LOADING,
});
export const staffsInDptmFailed = (errmess) => ({
  type: ActionTypes.STAFFS_IN_DPTM_FAILED,
  payload: errmess,
});
export const addStaffsInDptm = (staff) => ({
  type: ActionTypes.ADD_STAFFS_IN_DPTM,
  payload: staff,
});

//Fetch Salary
export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((staffs) => dispatch(addSalary(staffs)))
    .catch((error) => dispatch(salaryFailed(error.message)));
};
export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});
export const salaryFailed = (errmess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errmess,
});
export const addSalary = (staffs) => ({
  type: ActionTypes.ADD_SALARY,
  payload: staffs,
});

//Fetch AddNewStaff
export const addStaff = (staff) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});
export const postAddStaff = (staff) => (dispatch) => {
  dispatch(staffsLoading(true));
  const newStaff = {
    id: staff.id,
    name: staff.name,
    doB: staff.doB,
    salaryScale: staff.salaryScale,
    startDate: staff.startDate,
    departmentId: staff.department.id,
    annualLeave: staff.annualLeave,
    overTime: staff.overTime,
    image: staff.image,
  };
  dispatch(addStaff(newStaff));
  return fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffs(response)))
    .catch((error) => {
      console.log("Post Add Staff ", error.message);
      alert("Error " + error.message);
    });
};

//Edit Staff Info
export const editStaff = () => ({
  type: ActionTypes.EDIT_STAFF,
});

export const patchEditStaff = (staff) => (dispatch) => {
  dispatch(staffsLoading(true));
  const editedStaff = {
    id: staff.id,
    name: staff.name,
    doB: staff.doB,
    salaryScale: staff.salaryScale,
    startDate: staff.startDate,
    departmentId: staff.department.id,
    annualLeave: staff.annualLeave,
    overTime: staff.overTime,
    image: staff.image,
  };
  dispatch(editStaff());
  return fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(editedStaff),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffs(response)))
    .catch((error) => {
      console.log("EDIT STAFF ERROR ", error.message);
      alert("Error " + error.message);
    });
};

// Delete Staff
export const deleteStaff = () => ({
  type: ActionTypes.DELETE_STAFF,
});
export const handleDeleteStaff = (id) => (dispatch) => {
  dispatch(staffsLoading(true));
  dispatch(deleteStaff());
  return fetch(baseUrl + "staffs/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.message = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffs(response)))
    .catch((error) => {
      console.log("DELETE STAFF ERROR ", error.message);
      alert("Error " + error.message);
    });
};
