import React, { useState } from 'react';
import { Label, Input, Button, Col, Form, FormGroup, FormFeedback } from "reactstrap";
function Contact(props) {
    const [validate,setValidate]=useState({
        fname:"",
    })
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        tel: "",
        email: "",
        agree: false,
        contactType: "Tel.",
        message: ""
    });
  
    const handleChange = (event) => {
         const {name}=event.target;
       
        const value=event.target.type==="checkbox"?event.target.checked:event.target.value;
       
       
        setFormData(preValue=>{
            return{
                ...preValue,
                [name]:value
            }
        })
       
         
       

    }
    const handleSubmit=(event)=>
    {
        console.log(JSON.stringify(formData));
        alert(JSON.stringify(formData))
        event.preventDefault();
   
    }
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div style={{ margin: "100px" }}>
                <Form onSubmit={handleSubmit}>

                    <FormGroup row>
                        <Label for="fname" sm={2}>First Name</Label>
                        <Col sm={10}>
                            <Input type="text" 
                            name="fname" 
                            id="fname" 
                            placeholder="First Name"
                            onChange={handleChange}
                            value={formData.fname}
                           
                             />
                             <FormFeedback>{validate.fname}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="lname" sm={2}>Last Name</Label>
                        <Col sm={10}>
                            <Input type="text" 
                            name="lname" id="lname"
                             placeholder="Last Name"
                             onChange={handleChange}
                            value={formData.lname}
                             />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="telnum" sm={2}>Contact Tel.</Label>
                        <Col sm={10}>
                            <Input type="tel"
                             name="tel" 
                             id="telnum"
                              placeholder="Tel. Number"
                              onChange={handleChange}
                              value={formData.tel}
                               />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" 
                            name="email" id="Email" 
                            placeholder="Email" 
                            onChange={handleChange}
                            value={formData.email}
                            />
                            <FormFeedback>{"hii"}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 6, offset: 2 }}>

                            <Input type="checkbox" 
                            name="agree"
                            
                             onChange={handleChange}
                            
                               
                             />{' '}
                            <strong>May we contact you</strong>

                        </Col>




                        <Col sm={{ size: 4 }}>
                            <Input type="select" name="select"
                             onChange={handleChange}
                             value={formData.contactType}
                             >
                                <option>Email</option>
                                <option>Tel.</option>

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Message" sm={2}>Message</Label>
                        <Col sm={10}>
                            <Input type="textarea"
                             rows={12} 
                             name="message" 
                             id="Message"
                             onChange={handleChange}
                             value={formData.message}
                              />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">Submit</Button>
                        </Col>
                    </FormGroup>



                </Form>
            </div>

        </div>
    );
}

export default Contact;