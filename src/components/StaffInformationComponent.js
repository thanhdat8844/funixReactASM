import React from "react";
import { Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { Fade } from "react-animation-components";

function RenderStaff({ staff, dptm }) {
  if (staff != null) {
    return (
      <div key={staff.id}>
        <Media className="row">
          <img
            src={staff.image}
            alt={staff.name}
            className="col-12 col-md-4 col-lg-3 p-1"
          />
          <Media body className="col-12 con-md-8 col-lg-9 p-1">
            <Fade in>
              <Media heading>Họ và tên: {staff.name}</Media>
              <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </p>
              <p>Phòng ban: {dptm.name}</p>
              <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
              <p>Số giờ đã làm thêm: {staff.overTime}</p>
            </Fade>
          </Media>
        </Media>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const StaffInfo = (props) => {
  if (props.staff && props.departments[0]) {
    const dptm = props.departments.filter(
      (dep) => dep.id === props.staff.departmentId
    )[0];
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.staff.name}</h3>
            <hr />
          </div>
        </div>
        <div className="container">
          <RenderStaff staff={props.staff} dptm={dptm} />
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};
export default StaffInfo;
