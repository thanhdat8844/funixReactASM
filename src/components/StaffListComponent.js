import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Search from "./SearchComponent";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(value) {
    this.setState({
      searchName: value,
    });
  }

  render() {
    const staffslist = this.props.staffs
      .filter((staff) =>
        staff.name.toLowerCase().includes(this.state.searchName.toLowerCase())
      )
      .map((staff) => {
        return (
          <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-1">
            <Card id="show-staffs">
              <Link to={`/staff/${staff.id}`}>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardTitle>{staff.name}</CardTitle>
              </Link>
            </Card>
          </div>
        );
      });
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem active>
              <Link to="/staff">Nhân viên</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Search onClickSearch={this.handleSearch} />
          <div className="container">
            <div className="row">{staffslist}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default StaffList;
