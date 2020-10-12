import React from "react";

import { Card,CardImgOverlay, CardImg, CardBody, Button, CardTitle, CardText, Row, Col, Form, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from "react-router-dom";
import "./Css/dish.css";

import { useState } from "react";
import DishDetailComponents from "./DishDetailComponent.jsx";
function MenuComponent() {
    const [dishImgs, setDishImgs] = useState(DishDetailComponents);
    const [comments,setComments]=useState([]);
    const [getDetails, setGetDetail] = useState({
        name: "",
        description: "",
        img: "",
       


    })

    const [isClick, setIsClick] = useState(false);
    function handlClick(id) {
        
        window.location="/menu/"+id;

    }
    return (
        <div className="container">
        <Breadcrumb>
            <BreadcrumbItem>
                <Link   className="nav"to="/home">Home</Link>

            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link className="nav-active"  to="/menu">Menu</Link>
                
            </BreadcrumbItem>
        </Breadcrumb>

        <Row>

            { dishImgs.map(dish => {
                return <Col sm="5">
                  <div className="dish-clicked">
                  <Card onClick={() => { handlClick(dish.id) }}>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardImg top width="100%" src={dish.image} alt="Card image cap" />
                    </Card>

                  </div>
                    
                </Col>
            })}
          




        </Row>
        </div>
    );
}
export default MenuComponent ;

