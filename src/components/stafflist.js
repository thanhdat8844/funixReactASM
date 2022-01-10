import React, {Component} from "react";
import {Card,CardText,CardTitle} from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={
            slectedStaff:null
        }

    }
    onStaffSlect(staff){
        this.setState({slectedStaff: staff});
        
    }
    renderStaff(staff){
        if (staff != null){
            return(
                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Card>
                    <CardTitle>Họ và tên : {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số giờ đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                
                </div>
            )

        }
        else{
            return(
                <div>
                    <CardTitle>Bấm vào tên nhân viên để xem thông tin.</CardTitle>
                </div>
            );
        }
    }
   
    render(){
        const staffs=this.props.staffs.map((staff)=>{
            return(
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 p-1" >
                <Card onClick={()=>this.onStaffSlect(staff)}>
                    <CardTitle>{staff.name}</CardTitle>
                </Card>
                </div>
            );

        });
        return (
            <div className="container">
                <div className="row">                 
                    {staffs}
                </div>
                <div className="col-style">
                    <p>Chọn số cột bạn muốn hiển thị:</p>
                </div>
                <form>
                    <label>
                        <input type="radio"/>Mặc định
                    </label>
                    <label>
                        <input type="radio"/>1 cột
                    </label>
                    <label>
                        <input type="radio"/>2 cột
                    </label>
                    <label>
                        <input type="radio"/>3 cột
                    </label>
                    <label>
                        <input type="radio"/>4 cột
                    </label>
                    <label>
                        <input type="radio"/>6 cột
                    </label>
                </form>
                <div className="row" id="show-staff">
                    {this.renderStaff(this.state.slectedStaff)}
                
                </div>

            </div>
            

        );

    }

}

export default StaffList;
