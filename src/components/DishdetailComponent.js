import React,{Component} from "react";
import {Card,CardImg,CardText,CardBody,CardTitle} from "reactstrap";
class DishDetail extends Component {
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if(dish !=null){
            return(
                <Card className="col-12 col-md-5 m-1">
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>

            )
        }
        else{
            return(
                <div></div>
            
            )
        }
        }
    renderComments(cmt){
        if(cmt.length!=0){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {cmt.map(comment=>(
                        <ul className="list-unstylded">
                            <li>
                                <p>{comment.comment}</p>
                                <p>--{comment.author},{comment.date}</p>
                            </li>
                        </ul>
                    ) )}
                </div>
                
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render(){
        let dish;
        if (this.props.selectedDish){
            dish = (
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            )
        }
        else{
            dish=<div></div>
        }
        return(
            <div className="container">
                {dish}
            </div>
        )
    }

}
export default DishDetail;