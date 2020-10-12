import React, { Component, useState } from "react";
import "./Css/dish.css";
import { Card,CardImgOverlay, CardImg, CardBody, Button, CardTitle, CardText, Row, Col, Form, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from "react-router-dom";


import DishDetailComponents from "./DishDetailComponent.jsx";

class SpecficFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getDetails: {
                name: "",
                description: "",
                img: "",
            },
            comments: [],
            id1:""
        }
    }
  componentDidMount(){
      const id=this.props.match.params.id;
      
      this.setState({
        id1:this.props.match.params.id,
          getDetails:{
            name: DishDetailComponents[id].name,
            description: DishDetailComponents[id].description,
            img: DishDetailComponents[id].image,
          },
          comments:DishDetailComponents[id].comments

      })

  }


    render() {
        return (<div className="container">
        <Breadcrumb>
            <BreadcrumbItem>
                <Link   to="/home">Home</Link>

            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link   to="/menu">Menu</Link>
                
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link   to={this.state.id1}>{this.state.id1}</Link>
                
            </BreadcrumbItem>
        </Breadcrumb>
        <Row>
            {<Col sm="5">
                <Card className="dish-clicked">
                    <CardImg top width="100%" src={this.state.getDetails.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle> <b>{this.state.getDetails.name}</b></CardTitle>

                        <CardText>{this.state.getDetails.description}</CardText>

                    </CardBody>
                </Card>
            </Col>

            }
            <Col sm="5">
                <div className="dish-clicked">
                    <h2>Comments</h2>
                    {this.state.comments.map(c => {
                        return <div id={c.id}> <p>{c.comment}</p>
                            <p>--{c.author}, {c.date}</p>
                        </div>
                    })}

                </div>


            </Col>
</Row>


        </div>)
    }
}


export default SpecficFood;