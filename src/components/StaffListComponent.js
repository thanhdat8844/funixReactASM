import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
function StaffList({ staffs }) {
  const [searchStaff, setSearchStaff] = useState("");
  const handleChange = (e) => {
    setSearchStaff(e.currentTarget.value);
  };
  const filteredPersons = staffs
    .filter((person) =>
      person.name.toLowerCase().includes(searchStaff.toLowerCase())
    )
    .map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-4 col-lg-2 p-1">
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
      </div>
      <div className="col-12 col-md-6 col-lg-6 p-1">
        <Form id="search-form">
          <FormGroup>
            Tìm nhân viên:
            <Input
              type="search"
              placeholder="Nhập tên nhân viên"
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="row">{filteredPersons}</div>
    </div>
  );
}
export default StaffList;
