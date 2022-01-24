import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import StaffList from "./StaffListComponent";

function RenderDepDetail(props) {
  return (
    <div>
      <div className="container">
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/department">Phòng ban</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dptm.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dptm.name}</h3>
              <hr />
            </div>
          </div>
          <div className="container">
            <StaffList staffs={props.staffs} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderDepDetail;
