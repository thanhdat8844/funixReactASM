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
    showCols(props){
        let classCols="";
        switch(props){
            default:
            case "7":
                classCols = "col-12 col-md-6 col-lg-4 p-1";
                break;
            case "1":
                classCols = "col-12 col-md-12 col-lg-12 p-1";
                break;
            case "2":
                classCols = "col-6 col-md-6 col-lg-6 p-1";
                break;
            case "3":
                classCols = "col-4 col-md-4 col-lg-4 p-1";
                break;
            case "4":
                classCols = "col-3 col-md-3 col-lg-3 p-1";
                break;
            case "6":
                classCols = "col-2 col-md-2 col-lg-2 p-1";
                break;
        }
        return classCols;
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
                <div key={staff.id} className={this.showCols("6")} >
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
                    <input name="cols "type="radio"/>Mặc định
                    <input name="cols "type="radio"/>1 cột
                    <input name="cols "type="radio"/>2 cột
                    <input name="cols "type="radio"/>3 cột
                    <input name="cols "type="radio"/>4 cột
                    <input name="cols "type="radio"/>6 cột
                </form>
                <div className="row" id="show-staff">
                    {this.renderStaff(this.state.slectedStaff)}
                
                </div>

            </div>
            

        );

    }

}

export default StaffList;
