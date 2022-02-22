import React, { useEffect, useState } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./StaffInformationComponent";
import Department from "./DepartmentComponent";
import Payroll from "./PayrollComponent";
import RenderDepDetail from "./DepDetailComponent";
import Salary from "./SalaryComponent";
import {
  Routes,
  Route,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchStaffs,
  fetchDptms,
  fetchStaffsInDptm,
  fetchSalary,
  postAddStaff,
  patchEditStaff,
  handleDeleteStaff,
} from "../redux/ActionCreator";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
  postAddStaff: (staff) => {
    dispatch(postAddStaff(staff));
  },
  patchEditStaff: (staff) => {
    dispatch(patchEditStaff(staff));
  },
  handleDeleteStaff: (id) => {
    dispatch(handleDeleteStaff(id));
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

  const location = useLocation();
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
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes>
            <Route
              exact
              path="/staff"
              element={
                <StaffList
                  staffs={props.staffs.staffs}
                  isLoading={props.staffs.isLoading}
                  errMess={props.staffs.errMess}
                  postAddStaff={props.postAddStaff}
                  patchEditStaff={props.patchEditStaff}
                  handleDeleteStaff={props.handleDeleteStaff}
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
            <Route path="*" element={<Navigate to="/staff" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
