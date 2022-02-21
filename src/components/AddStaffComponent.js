import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import StaffForm from "./StaffFormComponent";

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
    this.props.postAddStaff(newStaff);
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
            <StaffForm handleSubmit={this.handleSubmit} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddStaff;
