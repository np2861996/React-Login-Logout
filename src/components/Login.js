import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import {NavLink, useNavigate} from 'react-router-dom';

const Login = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("geniobitsusedata");


    const { email, password } = inpval;

   if (email === "") {
      alert("email is required");
    }
    else if (!email.includes('@')) {
      alert("please enter valid email");
    }
    else if (password === "") {
      alert("password is required");
    }
    else if (password.length < 6) {
      alert("password is short");
    }
    else {
      if(getUserArr && getUserArr.length){
          const userdata = JSON.parse(getUserArr);
          const userlogin = userdata.filter( (items,index) => {
            return items.email === email && items.password === password;
          }) 

          if(userlogin.length === 0){
            alert("invalid details")
          }
          else{
            localStorage.setItem("geniobitslogindata",JSON.stringify(userlogin));
            history("/details")
          }
      }
    }
  }

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className='text-center mb-3 col-lg-6'>Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" className='col-lg-6' onClick={addData} style={{ backgroundColor: "rgb(67,185,127)" }} type="submit">
                Submit
              </Button>
            </Form>
            <p className='mt-3'>Already have an account? <span><NavLink to="/">Sign Up</NavLink></span></p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  )
}

export default Login
