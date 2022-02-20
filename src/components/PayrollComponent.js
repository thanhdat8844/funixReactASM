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
function RenderPayroll({ payroll }) {
  return (
    <Card className="show-table" key={payroll.id}>
      <Link to={`/payroll/${payroll.id}`}>
        <CardTitle className="show-name">{payroll.name}</CardTitle>
        <div className="show-pay">
          <CardText>Mã nhân viên: {payroll.id}</CardText>
          <CardText>Hệ số lương: {payroll.salaryScale}</CardText>
          <CardText>Số giờ làm thêm: {payroll.overTime}</CardText>
          <CardText>Lương: {payroll.salary}</CardText>
        </div>
      </Link>
    </Card>
  );
}
function Payroll(props) {
  const payrolls = props.payrolls.map((payroll) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-1">
        <RenderPayroll payroll={payroll} />
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
  } else if (props.payrolls) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">{payrolls}</div>
      </div>
    );
  }
}
export default Payroll;
