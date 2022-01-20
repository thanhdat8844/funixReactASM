import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffList";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

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
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
