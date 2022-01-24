import React from "react";
import { Link } from "react-router-dom";
import { Table, Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderSalary({ staff }) {
  const basicSalary = parseInt(3000000 * staff.salaryScale);
  const overTimeSalary = parseInt(200000 * staff.overTime);
  const salary = (basicSalary + overTimeSalary).toFixed();
  return (
    <div className="row">
      <h3>Họ và tên: {staff.name}</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>STT</th>
            <th>Danh mục</th>
            <th>Đơn vị</th>
            <th>Hệ số</th>
            <th>Tổng</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Lương cơ bản</td>
            <td>3000000 VNĐ</td>
            <td>{staff.salaryScale}</td>
            <td>{parseInt(basicSalary)}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lương làm thêm</td>
            <td>200000 VNĐ</td>
            <td>{staff.overTime}</td>
            <td>{parseInt(overTimeSalary)}</td>
          </tr>
          <tr>
            <td> 3</td>
            <td> Thực nhận</td>
            <td> </td>
            <td> </td>
            <td>{parseInt(salary)}</td>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
function Salary(props) {
  return (
    <div>
      <div className="container">
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/payroll">Bảng lương</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row">
            <RenderSalary staff={props.staffs} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Salary;
