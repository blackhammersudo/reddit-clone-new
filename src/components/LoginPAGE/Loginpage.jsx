import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Loginpage = () => {
  const [inputlog,setinputlog ] = useState({
    email: "",
    password: "",
  });
  function loginData(e) {
    e.preventDefault();
    const localData=JSON.parse(localStorage.getItem("userdata"));
    console.log(localData)
    if(inputlog.email===localData.email && inputlog.password===localData.password){
      alert("sucees")
    }else{
      alert("faild")
    }
  }

  return (
    <div className="container mt-5 col-4">
      {/* email */}
      <Form onSubmit={loginData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={inputlog.email}
            onChange={(e) =>
              setinputlog({ ...inputlog, [e.target.name]: e.target.value })
            }
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputlog.password}
            onChange={(e) =>
              setinputlog({ ...inputlog, [e.target.name]: e.target.value })
            }
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Loginpage;
