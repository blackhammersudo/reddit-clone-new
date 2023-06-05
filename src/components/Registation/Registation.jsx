import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Loginpage from "../LoginPAGE/Loginpage";

const Registation = () => {
  // define state
  const [input,setinput]=useState({
    name:"",
    email:"",
    password:"",
    Phone:"",
  })
function getdata(e){
  e.preventDefault();
  localStorage.setItem("userdata",JSON.stringify(input))

}
function resetHandel(){
  setinput({
    name:"",
    email:"",
    password:"",
    Phone:"",
  })
}
  // console.log(name);
  // getdata

  return (
    <div className="container">

        <Form onSubmit={getdata}>
          {/* name */}
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control

              type="text"
            
              name="name"
              value={input.name}
              onChange={(e) => setinput({...input,[e.target.name]:e.target.value,})}
              placeholder="Enter Your Name"
            />
          </Form.Group>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              
              name="email"
              value={input.email}
              onChange={(e) => setinput({...input,[e.target.name]:e.target.value,})}
              placeholder="Enter email"
            />
          </Form.Group>

          {/* password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
      
              name="password"
              value={input.password}
              onChange={(e) => setinput({...input,[e.target.name]:e.target.value,})}
              placeholder="Password"
            />
          </Form.Group>

          {/* phone number */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="Phone"
              name="Phone"
              value={input.Phone}
              onChange={(e) => setinput({...input,[e.target.name]:e.target.value,})}
              placeholder="Enter Phone number"
            />
          </Form.Group>

          {/* button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>

          {/* have a accoutn */}
          <p >Already have a account. Login</p>
        </Form>
        <Button onClick={resetHandel} variant="primary" type="submit">
            Reset
          </Button>
    </div>
  );
  }

export default Registation;
