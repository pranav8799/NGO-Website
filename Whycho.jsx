import React from 'react'
// import pp from './im2.jpg'
import './Whycho.css'

const Whycho = () => {
  return (
    <>
            
        <div className='choose-us' style={{marginTop:'-5px'}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <img  src={'https://media.istockphoto.com/id/1145276617/photo/nurse-consoling-her-elderly-patient-by-holding-her-hands.jpg?s=612x612&w=0&k=20&c=G0J7NhTwQmFF3gO9SSpSZm06FBO3kyh2622UCmibouo='} />
                    </div>
                    <div className='col-6' >
                       
                        <h2 className='h1'>Why Choose us</h2>
                        <p>We are a trusted and experienced senior care provider for your loved ones, offering top-notch care, compassion, and expertise to ensure their well-being and happiness!</p>
                        <p>Choosing our old age home means choosing a compassionate and nurturing environment where your loved ones will thrive in their golden years. Our facility is not just a place to reside; it's a community where residents are cherished, their dignity is paramount, and their individual needs are attentively met. </p>
                        <a href='./our_work' className='read'>Know more</a>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  )
}

export default Whycho