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
  FormFeedback,
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
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handBlur = this.handBlur.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(name, doB, startDate, salaryScale, annualLeave, overTime) {
    const errors = {
      name: "Yêu cầu nhập",
      doB: "Yêu cầu nhập",
      startDate: "Yêu cầu nhập",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    const today = new Date().getTime();
    const birthday = new Date(doB).getTime();
    const startday = new Date(startDate).getTime();
    if (this.state.touched.name && name.length < 3) {
      errors.name = "Yêu cầu nhập nhiều hơn 2 ký tự";
    } else if (this.state.touched.name && name.length > 29) {
      errors.name = "Yêu cầu nhập ít hơn 30 ký tự";
    } else if (this.state.touched.name && name.length > 2 && name.length < 30) {
      errors.name = "";
    }
    if (this.state.touched.doB && birthday > today) {
      errors.doB = "Ngày sinh phải trước ngày hôm nay";
    } else if (this.state.touched.doB && doB != "") {
      errors.doB = "";
    }
    if (this.state.touched.startDate && startday > today) {
      errors.startDate = "Ngày bắt đầu phải trước ngày hôm nay";
    } else if (this.state.touched.startDate && startday < birthday) {
      errors.startDate = "Ngày bắt đầu phải lớn hơn ngày sinh";
    } else if (this.state.touched.doB && startDate != "") {
      errors.startDate = "";
    }
    if (isNaN(salaryScale)) {
      errors.salaryScale = "Hãy nhập bằng số";
    }
    if (isNaN(annualLeave)) {
      errors.annualLeave = "Hãy nhập bằng số";
    }
    if (isNaN(overTime)) {
      errors.overTime = "Hãy nhập bằng số";
    }
    return errors;
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
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );
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
                    onBlur={this.handBlur("name")}
                    type="text"
                    id="name"
                    name="name"
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                  ></Input>
                  <FormFeedback>{errors.name}</FormFeedback>
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
                    onBlur={this.handBlur("doB")}
                    type="date"
                    id="doB"
                    name="doB"
                    pattern="\d{2}-\d{2}-d{4}"
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                  ></Input>
                  <FormFeedback>{errors.doB}</FormFeedback>
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
                    onBlur={this.handBlur("startDate")}
                    type="date"
                    id="startDate"
                    name="startDate"
                    pattern="\d{2}-\d{2}-d{4}"
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                  ></Input>
                  <FormFeedback>{errors.startDate}</FormFeedback>
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
                    placeHolder="1.0 -> 3.0"
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                  ></Input>
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
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
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                  ></Input>
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
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
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                  ></Input>
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 5 }}>
                  <Button
                    type="submit"
                    color="primary"
                    disabled={
                      !this.state.name ||
                      !this.state.doB ||
                      !this.state.startDate ||
                      this.state.salaryScale === "" ||
                      this.state.annualLeave === "" ||
                      this.state.overTime === ""
                    }
                  >
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
