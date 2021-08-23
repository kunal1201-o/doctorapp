import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as FaIcon from 'react-icons/fa';

import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <div>
             <div className="navbarf">
               <Link to="#" className="menu-bars-h" >
                   <FaIcons.FaHome />
               </Link>
               
               <Link to="#" className="menu-bars-h">
                   <FaIcon.FaSearch/>
               </Link>
               <Link to="#" className="menu-bars-h">
                   <FaIcon.FaWhatsapp/>
               </Link>
               <Link to="#" className="menu-bars-h">
                   <FaIcon.FaUserAlt/>
               </Link> 
           
           </div>
            
        </div>
        </>
    )
}

export default Footer
