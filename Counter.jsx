import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css';

const Counter = () => {
        const [CounterOn,setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit = {()=> setCounterOn(false)}>
       
        <div className='box' style={{ color:'#053336'}}>
            {/* <h1>We're on a mission to help all your problems</h1> */}
                
                <h1>
                    
                    {CounterOn && <CountUp start={0} end={580} duration={18} delay={0}/> }
                </h1>
                

                <h1>
                    {CounterOn && <CountUp start={0} end={500} duration={18} delay={0}/> }
                </h1>
                

                <h1>
                    {CounterOn && <CountUp start={0} end={200} duration={18} delay={0}/> }
                </h1>


                
        
        </div>

    
        <div className='box'>

        <span>Donation Campaigns are running</span>
                <span>Professional and kind volunteers</span>
                <span>Funds we raised till now on site</span>
               
        </div>

  
      
   


    </ScrollTrigger>
   
  )
}

export default Counter


