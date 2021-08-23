import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import {Link} from 'react-router-dom'

import "./Navbar.css"
const Profile = () => {

    return (
       <>
       <div className="navbar">
               <Link to="#" className="menu-bars" >
                   <FaIcons.FaArrowLeft />
               </Link>
               <h1 className="profile">Profile</h1>
               </div>
            <div className="photos">
                <div className="icpara">
                <Link to="#" className="menu-bars-pr" >
               <IoIcons.IoIosPaper/>
               <p className="para">Report</p>
               </Link>
                </div>
            
            
                <img src="Images/pic5.jfif" alt="" />
                <p>Raj</p>
                <div className="icpara">
                <Link to="#" className="menu-bars-pr" >
                <FaIcons.FaPen/>
                <p className="para">Edit</p>
               </Link>
                </div>
               
               
            </div>
</>
    )
}

export default Profile
