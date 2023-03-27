import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Details = () => {

    const [userdetails,setUserdetails] = useState([])
    
    const SuccessMsg = () => {
        const getUser = localStorage.getItem("geniobitslogindata"); 

        if(getUser && getUser.length){
            const currentuser = JSON.parse(getUser);

            setUserdetails(currentuser)
            alert("Welcome");
        }
    }

    const history = useNavigate('/'); 

    const userLogout = () => {
        localStorage.removeItem("geniobitslogindata");
        history("/")
    } 

    useEffect( () => {
        SuccessMsg();
    }, []);
    
    return (
    <>
      {
        userdetails.length === 0 ? 'error' :
        <>
        <h1>details</h1>
        <button onClick={userLogout}>Logout</button>
        </>
      }
    </>
  )
}

export default Details
