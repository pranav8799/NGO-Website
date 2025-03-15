import React from 'react'
import '../App.css'
const Footer1 = () => {
  return (
   
  
   <div  style={{backgroundColor:'#053336'}}className='Footer'>
    <div className='container'>
      <div className='row'>
      <div className=' col-md-6 col-lg-5 col-12 ft-1' >
        <h3 style={{textDecoration:'none', color:'white'}}><span >Sanidhya</span> Foundation</h3>
        <p style={{color:'white'}}>working for elderly</p>
        <div className='footer-icons'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className=' col-md-6 col-lg-3 col-12 ft-2'>
        <h5>quick links</h5>
        <ul>
          <li><a href=''>Who Are We</a></li>
          <li><a href=''>Our Work</a></li>
          <li><a href=''>Media</a></li>
          <li><a href=''>Donation</a></li>
        </ul>
      </div>
      <div className=' col-md-6 col-lg-4 col-12 ft-2'>
      <h5>Contact Us</h5>
      <p style={{color:'white'}}> <i style={{color:'white'}} class="fa-solid fa-phone-volume"></i>+91 6767673556</p>
      <p style={{color:'white'}}><i style={{color:'white'}}class="fa-regular fa-envelope"></i> sanidhya@gmail.com</p>
      <p style={{color:'white'}}><i style={{color:'white'}}class="fa-regular fa-location-dot"></i>address of sanidhya </p>
      </div>
      <br></br>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14999.979469710923!2d73.7785491!3d19.9667181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebbeb454ac55%3A0x4cbfba2f7712a137!2sSaniddhya%20old%20age%20care%20foundation!5e0!3m2!1sen!2sin!4v1706281502131!5m2!1sen!2sin" width="200" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      </div>
    </div>
  </div> 
  )
}

export default Footer1