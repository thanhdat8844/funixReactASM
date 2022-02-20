import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderDepartment({ dptm }) {
  return (
    <Card className="show-table">
      <Link to={`/department/${dptm.id}`}>
        <CardTitle className="show-name">{dptm.name}</CardTitle>
        <CardText className="show-text">
          Số lượng nhân viên: {dptm.numberOfStaff}
        </CardText>
      </Link>
    </Card>
  );
}
function Department(props) {
  const dptms = props.dptms.map((dptm) => {
    return (
      <div key={dptm.id} className="col-12 col-md-6 col-lg-4 p-1">
        <RenderDepartment dptm={dptm} />
      </div>
    );
  });
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dptms) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem active>
              <Link to="/department">Phòng ban</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">{dptms}</div>
      </div>
    );
  }
}
export default Department;
