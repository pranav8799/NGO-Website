import React from 'react';
import Abc from './sanid.jpg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import LoginForm from './Forms/LoginForm';



function Navbar() {
  return (
    <><section className="h-wrapper ground" >
         <div className="flexCenter paddiings innerWidth h-container">
            <img src={Abc} alt='' style={{width:'80px', borderRadius:'60%', backgroundColor:'peachpuff'}}/>

          <div className=" flexCenter h-menu">
          
          <a href='/'style={{color:'white', textDecoration:'none'}}>Home</a>
          <a href='/whoare_we'style={{color:'white', textDecoration:'none'}}>Who Are We</a>
          <a href='/our_work'style={{color:'white', textDecoration:'none'}}>Our Work</a>
          <a href='/media'style={{color:'white', textDecoration:'none'}}>Media</a>
          
          {/* <button className="button" >
              <a href='http://localhost:3001/' ></a>
              register
          </button> */}

          <button className="button" >
              <a href='http://localhost:3001/'>Registration</a>
          </button>
         </div>
        </div>
        

      </section ></>
  )
}

export default Navbar