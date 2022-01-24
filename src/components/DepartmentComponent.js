import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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
export default Department;
