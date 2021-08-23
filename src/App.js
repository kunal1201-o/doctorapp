
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Second from './Component/Second';
import Front from './Component/Front';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import Profile from './Component/Profile';
import Report from './Component/Report';
import Sliders from './Component/Sliders';
function App() {
  return (
    
    <Router>
     
      <Switch>
      
        <Route  path="/" exact component={Navbar}/>
        <Route  path="/Front" component={Front}/>
        <Route  path="/Second" component={Second} />
        <Route  path="/Main" component={Main}/>
        <Route path="/Profile"  component={Profile}/>
        <Route path="/Report" component={Report}/>
        <Route exact path="/Slider" component={Sliders}/>
      </Switch>
    </Router>
    
 
  );
}

export default App;
