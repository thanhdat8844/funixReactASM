import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import StaffForm from "./StaffFormComponent";

class EditStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleEditStaff = this.handleEditStaff.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleEditStaff(values) {
    this.toggleModal();
    const staff = {
      id: this.props.staff.id,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: this.depInfo(values.department),
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    };
    this.props.patchEditStaff(staff);
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
        <Button onClick={this.toggleModal} className="btn btn-primary col-12">
          <span className="fa fa-pencil"></span>Sửa
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Cập nhật thông tin nhân viên
          </ModalHeader>
          <ModalBody>
            <StaffForm
              staff={this.props.staff}
              handleSubmit={this.handleEditStaff}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default EditStaff;
