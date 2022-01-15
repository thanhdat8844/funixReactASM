import React,{Component} from "react";
import {Card,CardImg,CardText,CardBody,CardTitle} from "reactstrap";
class DishDetail extends Component {
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if(dish !=null){
            return(
                <Card key={dish.id} className="col-12 col-md-5 m-1">
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
                        <ul key={comment.id}className="list-unstylded">
                            <li>
                                <p>{comment.comment}</p>
                                <p>--{comment.author},{new Intl.DateTimeFormat("en-US", {year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(comment.date)))}</p>
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
        if (this.props.dish){
            return (
                <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
                </div>
            )
        }
        else{
            return(
            <div></div>
            )
        }
    }

}
export default DishDetail;