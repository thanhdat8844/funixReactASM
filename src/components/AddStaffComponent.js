import React, { Component } from "react";
import {
  Label,
  Col,
  Input,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      id: "",
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "Sale",
      annualLeave: 0,
      overTime: 0,
      image: "/assets/images/alberto.png",
      staffs: this.props.staffs,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    this.toggleModal();
    event.preventDefault();
    const newStaff = {
      id: this.props.staffs.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.depInfo(this.state.department),
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: this.state.image,
    };
    this.state.staffs.push(newStaff);
    this.props.onClickAdd(newStaff);
    console.log(this.state.staffs);
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    name="name"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.doB}
                    onChange={this.handleChange}
                    type="date"
                    id="doB"
                    name="doB"
                    pattern="\d{2}-\d{2}-d{4}"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.startDate}
                    onChange={this.handleChange}
                    type="date"
                    id="startDate"
                    name="startDate"
                    pattern="\d{2}-\d{2}-d{4}"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.department}
                    onChange={this.handleChange}
                    type="select"
                    id="department"
                    name="department"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.salaryScale}
                    onChange={this.handleChange}
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.annualLeave}
                    onChange={this.handleChange}
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>
                  Số giờ đã làm thêm
                </Label>
                <Col md={8}>
                  <Input
                    value={this.state.overTime}
                    onChange={this.handleChange}
                    type="text"
                    id="overTime"
                    name="overTime"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 5 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddStaff;
