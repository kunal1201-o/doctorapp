import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FaIcon from  'react-icons/fa';
import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData';


import Footer from './Footer';

import Box from './Box';
import Menu from './Menu';
import Slider1 from './Slider1';
import Sliders from './Sliders';


const Main = () => {

    const [sidebar , setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
    

    return (
        <>
           <div className="navbar">
               <Link to="#" className="menu-bars" >
                   <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               
               <Link to="#" className="menu-bars-h1">
                   <FaIcon.FaCartPlus/>
               </Link>
                    
           
           </div>
           <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
               <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                      <Link to="#" className="menu-bars">
                          <AiIcons.AiOutlineClose/>
                      </Link>
                  </li>

                 {SidebarData.map((item,index)=>{
                     return(
                         <li key={index} className={item.cName}>
                             <Link to={item.path}  >
                                 {item.icon}
                                 <span>{item.title}</span>
                             </Link>
                         
                         </li>
                     )
                 })}
                     <button className="btno">Emergency Help</button>
                     <button className="btno">Logout</button>
               </ul>
         
       
           </nav>
           <h2>Dr Abhijeet Kr</h2>
           <div className="slider">
               <Sliders/>
           </div>
           <div className="box_t">
           <Box/>
           <Box/>
              
               
           </div>
           <div className="  ">
              <Slider1/>
           </div>
           <div>
               <Menu/>
           </div>
           
           <div className="footers">
               <Footer/>
           </div>
         
        </>
    )
}

export default Main
