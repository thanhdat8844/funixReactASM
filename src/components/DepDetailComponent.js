import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import StaffList from "./StaffListComponent";
import { Loading } from "./LoadingComponent";

function RenderDepDetail(props) {
  if (props.staffs && props.dptm) {
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
              <StaffList
                staffs={props.staffs}
                isLoading={props.isLoading}
                errMess={props.errMess}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
export default RenderDepDetail;
