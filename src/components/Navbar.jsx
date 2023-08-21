import React, { useEffect }  from 'react'
import {Link,useLocation} from "react-router-dom";
import "./Navbar.css";
// import ReorderIcon from '@material-ui/icons/Reorder';
import { useState } from 'react';
import { FaSort } from 'react-icons/fa';


function Navbar() {
    const [expandNavbar,setExpandNavbar] =useState(false);
    const location = useLocation();
    useEffect(()=>{
        setExpandNavbar(false);

    },[location])

  return (
    <div className="navbar" id={expandNavbar ? "open": "close"}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpandNavbar((prev)=>!prev);
            }}>
               
                <FaSort />

            </button>

        </div>
        <div className='links'>
            <Link to = "/">Home</Link>
            <Link to = "/projects">Projects</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/experience">Experience</Link>


        </div>

      
    </div>
  )
}

export default Navbar
