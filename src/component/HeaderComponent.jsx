import React, { Component, useCallback, useState } from "react";

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from "./imgs/logo.png"
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
class HeaderComponent extends Component {
    constructor(props){
        super(props);
   
    this.handleLogin=this.handleLogin.bind(this);
    this.toggleNav=this.toggleNav.bind(this);
    this.state={
        isNavOpen:false,
        isModalOpen:false
    }
    }

    
   
    toggleNav = () => {
        return this.setState({isNavOpen:!this.state.isNavOpen})
    }
    
    handleModalToggle = () => {
        return this.setState({isModalOpen:!this.state.isModalOpen});
    }

    handleLogin = (event) => {
      alert("username: "+this.username.value+ " password: "+this.password.value+"  remember: "+this.remember.checked);
    
        this.handleModalToggle();
        event.preventDefault();
    }
    render(){

        return <div>


            <Navbar color="light" light expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.state.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src={logo} height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={this.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>

                        </Nav>
                        <Nav className="mr-auto">
                            <NavItem>
                                <Button onClick={this.handleModalToggle} color="primary">Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>


            <Modal isOpen={this.state.isModalOpen} toggle={this.handleModalToggle}>
                <ModalHeader toggle={this.handleModalToggle}>
                    <h1>Login</h1>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text"
                                name="username"
                                id="username"
                                innerRef={(input)=>this.username=input}
                            
                                placeholder="username" />

                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="pass">Password</Label>
                            <Input type="password" name="pass"
                                id="pass"
                                innerRef={(input)=>this.password=input}

                                placeholder="Password" />

                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input)=>this.remember=input} />
                             Remember me
               </FormGroup>
                        <FormGroup check>
                            <Button type="submit" >Submit</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>

        </div>

    }

}

export default HeaderComponent;