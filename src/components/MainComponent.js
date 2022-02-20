import React, { useEffect, useState } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./StaffInformationComponent";
import Department from "./DepartmentComponent";
import Payroll from "./PayrollComponent";
import RenderDepDetail from "./DepDetailComponent";
import Salary from "./SalaryComponent";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchStaffs,
  fetchDptms,
  fetchStaffsInDptm,
  fetchSalary,
} from "../redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsInDptm: state.staffsInDptm,
    salary: state.salary,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDptms: () => {
    dispatch(fetchDptms());
  },
  fetchStaffsInDptm: (dptmId) => {
    dispatch(fetchStaffsInDptm(dptmId));
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
});

function Main(props) {
  const [dptmId, setDptmId] = useState("");
  useEffect(() => {
    props.fetchStaffs();
    props.fetchDptms();
    props.fetchSalary();
    props.fetchStaffsInDptm(dptmId);
  }, [dptmId]);
  const StaffWithId = () => {
    const params = useParams();
    return (
      <StaffInfo
        staff={
          props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(params.staffId, 10)
          )[0]
        }
        departments={props.departments.departments}
      />
    );
  };
  const DepDetailWithId = () => {
    const params = useParams();
    setDptmId(params.dptmId);
    return (
      <RenderDepDetail
        dptm={
          props.departments.departments.filter(
            (dptm) => dptm.id === params.dptmId
          )[0]
        }
        staffs={props.staffsInDptm.staffsInDptm}
        isLoading={props.staffsInDptm.isLoading}
        errMess={props.staffsInDptm.errMess}
      />
    );
  };
  const SalaryWithId = () => {
    const params = useParams();
    return (
      <Salary
        staffs={
          props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(params.staffId, 10)
          )[0]
        }
      />
    );
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/staff"
          element={
            <StaffList
              staffs={props.staffs.staffs}
              isLoading={props.staffs.isLoading}
              errMess={props.staffs.errMess}
            />
          }
        />
        <Route path="/staff/:staffId" element={<StaffWithId />} />
        <Route
          exact
          path="/department"
          element={
            <Department
              dptms={props.departments.departments}
              isLoading={props.departments.isLoading}
              errMess={props.departments.errMess}
            />
          }
        />
        <Route path="/department/:dptmId" element={<DepDetailWithId />} />
        <Route
          exact
          path="/payroll"
          element={
            <Payroll
              payrolls={props.salary.salary}
              isLoading={props.salary.isLoading}
              errMess={props.salary.errMess}
            />
          }
        />
        <Route path="/payroll/:staffId" element={<SalaryWithId />} />
        <Route path="*" element={<Navigate to="/staffs" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
