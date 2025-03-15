import React from 'react'
import Abc from './sanid.jpg';
import "./Welcome.css";
import Container from 'react-bootstrap/Container';

function Welcome(){
    return (
        <Container><div className="welcome"></div>
            <h1 style={{color:"palevioletred"}}>Welcome to Sanidya</h1>
            <p>where we provide safe and helthy environment for your love ones</p>

            <div className='first-des '>
                <div className='dest-text ' style={{paddingRight:'-2px'}}>
                    
                    <p>
                        is not only recognized by its high quality of service, but also for the lovable and empathetic people who offer the old people. Shantiban Old Age Home, one of the well-known Senior Citizen Homes in pune is a place where both, the services and the staff are professional Shantiban Old Age Home was started with the beautiful aim to give healthy food as well as secured shelter to deserved and needy old age home that require more care and can live in dignity. Shantiban  aims to offer assisted living to all old patients and support them in Diabetic Care, Paralysis, Bed Ridden, Dementia, Alzheimer's, Schizophrenia, Coma an
                    </p>

                </div> 
                <div className='image' style={{paddingLeft:'0px'}}>
                    <img src={Abc} />
                    <div style={{ height: '320px', width: '320px', backgroundColor: 'peachpuff' }}>
                        <h5>our mission</h5>
                        <p>through the conveyance of clinical greatness, unprecedented assistance and sympathetic consideration, while being perceived as the forerunner in home wellbeing and hospice administrations in Pune</p>
                    </div>
                </div>


            </div></Container>




       
    );
}

export default Welcome