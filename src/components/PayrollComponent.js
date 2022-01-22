import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderPayroll({ payroll }) {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  const salary = (
    payroll.salaryScale * basicSalary +
    payroll.overTime * overTimeSalary
  ).toFixed();
  return (
    <Card className="show-table">
      <CardTitle className="show-name">{payroll.name}</CardTitle>
      <div className="show-pay">
        <CardText>Mã nhân viên: {payroll.id}</CardText>
        <CardText>Hệ số lương: {payroll.salaryScale}</CardText>
        <CardText>Số giờ làm thêm: {payroll.overTime}</CardText>
        <CardText>Lương: {salary}</CardText>
      </div>
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
export default Payroll;
