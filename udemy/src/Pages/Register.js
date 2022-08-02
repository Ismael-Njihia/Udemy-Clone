 import React from 'react';
 import { Button, Form } from 'react-bootstrap';

 function Register(){

    return(
        <div className='LoginaAndSignup'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Full name" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your Phone number"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>


    )
 }
 export default Register


