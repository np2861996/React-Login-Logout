import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import {NavLink} from 'react-router-dom';

const Home = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
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
        
        const {name,email,date,password} = inpval;

        if(name === ""){
            alert("name is required");
        }
        else if(date === ""){
            alert("date is required");
        }
        else if(email === ""){
            alert("email is required");
        }
        else if(!email.includes('@')){
            alert("please enter valid email");
        }
        else if(password === ""){
            alert("password is required");
        }
        else if(password.length  < 6){
            alert("password is short");
        }
        else{
            localStorage.setItem("geniobitsusedata",JSON.stringify([...data,inpval]));
            alert("Registration successfully");
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data" style={{ width: "100%" }}>
                        <h3 className='text-center mb-3 col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Control type="text" name="name" onChange={getData} placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicBirthDate">
                                <Form.Control type="date" name="date" onChange={getData} />
                            </Form.Group>

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
                        <p className='mt-3'>Already have an account? <span><NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Home
