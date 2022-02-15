import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./StaffInformationComponent";
import Department from "./DepartmentComponent";
import Payroll from "./PayrollComponent";
import RenderDepDetail from "./DepDetailComponent";
import Salary from "./SalaryComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStaffs } from "../redux/ActionCreator";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchStaffs();
  }
  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffInfo
          staff={
            this.props.staffs.staffs.filter(
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
            this.props.departments.filter(
              (dptm) => dptm.id === match.params.dptmId
            )[0]
          }
          staffs={this.props.staffs.staffs.filter(
            (staff) => staff.department.id === match.params.dptmId
          )}
        />
      );
    };
    const SalaryWithId = ({ match }) => {
      return (
        <Salary
          staffs={
            this.props.staffs.staffs.filter(
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
            component={() => <StaffList staffs={this.props.staffs.staffs} />}
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/department"
            component={() => <Department dptms={this.props.departments} />}
          />
          <Route path="/department/:dptmId" component={DepDetailWithId} />
          <Route
            exact
            path="/payroll"
            component={() => <Payroll payrolls={this.props.staffs.staffs} />}
          />
          <Route path="/payroll/:staffId" component={SalaryWithId} />
        </Switch>
        <Redirect to="/staff" />

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
