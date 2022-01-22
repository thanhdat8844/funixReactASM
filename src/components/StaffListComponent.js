import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderStaffList({ staff }) {
  return (
    <Card id="show-staffs">
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardTitle>{staff.name}</CardTitle>
      </Link>
    </Card>
  );
}
function StaffList(props) {
  const staffs = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-lg-2 p-1">
        <RenderStaffList staff={staff} onClick={props.onClick} />
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
        <div className="row">{staffs}</div>
      </div>
    </div>
  );
}

export default StaffList;
