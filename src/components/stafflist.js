import React, {Component} from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from "reactstrap";
import {Media} from "reactstrap";

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={
        }

    }
   
    render(){
        const staffs=this.props.staffs.map((staff)=>{
            return(
                <Card>
                        <CardTitle>{staff.name}</CardTitle>
                </Card>
            );

        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {staffs}
                    </Media>
                </div>
            </div>

        );

    }

}

export default StaffList;
