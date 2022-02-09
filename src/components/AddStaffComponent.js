import React, { Component } from "react";
import {
  Label,
  Col,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length < len;
const minLength = (len) => (val) => val && val.length > len;
const isNumber = (val) => !isNaN(Number(val));

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      staffs: this.props.staffs,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    console.log(values);
    this.toggleModal();
    const newStaff = {
      id: this.props.staffs.length,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: this.depInfo(values.department),
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    };
    this.state.staffs.push(newStaff);
    this.props.onClickAdd(newStaff);
  }

  depInfo(dep) {
    switch (dep) {
      default:
      case "Sale":
        return {
          id: "Dept01",
          name: "Sale",
          numberOfStaff: "",
        };
      case "HR":
        return {
          id: "Dept02",
          name: "HR",
          numberOfStaff: "",
        };
      case "Marketing":
        return {
          id: "Dept03",
          name: "Marketing",
          numberOfStaff: "",
        };
      case "IT":
        return {
          id: "Dept04",
          name: "IT",
          numberOfStaff: "",
        };
      case "Finance":
        return {
          id: "Dept05",
          name: "Finane",
          numberOfStaff: "",
        };
    }
  }
  render() {
    return (
      <div className="m-2">
        <Button
          id="add-staff"
          outline
          onClick={this.toggleModal}
          color="primary"
        >
          <span className="fa fa-plus"></span>Thêm
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    validators={{
                      minLength: minLength(2),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      minLength: "Yêu cầu nhập nhiều hơn 2 ký tự",
                      maxLength: "Yêu cầu nhập ít hơn 30 ký tự",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Control
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    pattern="\d{2}-\d{2}-d{4}"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Control
                    model=".startDate"
                    type="date"
                    id="startDate"
                    name="startDate"
                    pattern="\d{2}-\d{2}-d{4}"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    defaultValue="Sale"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    defaultValue="1"
                    placeHolder="1.0 -> 3.0"
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập bằng số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    defaultValue="0"
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập bằng số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số giờ đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    defaultValue="0"
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập bằng số",
                    }}
                  />
                </Col>
              </Row>
              <FormGroup row>
                <Col md={{ size: 10, offset: 5 }}>
                  <Button type="submit" value="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddStaff;
