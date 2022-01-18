import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffList";
import Header from "./Header";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default Main;
