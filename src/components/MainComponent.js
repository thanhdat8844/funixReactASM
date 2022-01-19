import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffList";
import Header from "./Header";
import Footer from "./Footer";

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
        <Footer />
      </div>
    );
  }
}

export default Main;
