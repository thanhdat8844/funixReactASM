import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./StaffInformationComponent";
import Department from "./DepartmentComponent";
import Payroll from "./PayrollComponent";
import RenderDepDetail from "./DepDetailComponent";
import Salary from "./SalaryComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffInfo
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };
    const DepDetailWithId = ({ match }) => {
      return (
        <RenderDepDetail
          dptm={
            this.state.departments.filter(
              (dptm) => dptm.id === match.params.dptmId
            )[0]
          }
          staffs={this.state.staffs.filter(
            (staff) => staff.department.id === match.params.dptmId
          )}
        />
      );
    };
    const SalaryWithId = ({ match }) => {
      return (
        <Salary
          staffs={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/department"
            component={() => <Department dptms={this.state.departments} />}
          />
          <Route path="/department/:dptmId" component={DepDetailWithId} />
          <Route
            exact
            path="/payroll"
            component={() => <Payroll payrolls={this.state.staffs} />}
          />
          <Route path="/payroll/:staffId" component={SalaryWithId} />
        </Switch>
        <Redirect to="/staff" />

        <Footer />
      </div>
    );
  }
}

export default Main;
