import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./StaffInformationComponent";
import Department from "./DepartermentComponent";
import Payroll from "./PayrollComponent";
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
          <Route
            exact
            path="/payroll"
            component={() => <Payroll payrolls={this.state.staffs} />}
          />
        </Switch>
        <Redirect to="/staff" />

        <Footer />
      </div>
    );
  }
}

export default Main;
