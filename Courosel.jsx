
import pqr from './old.png';
import sss from './old4.jpg';
import abd from './old5.jpg';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Courosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={abd}style={{width:'100%', height:'600px'}} />
        <Carousel.Caption>
           <h1>Sanidhya Foundation</h1>
          <p>prioritising health of our elderly</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sss} style={{width:'100%', height:'600px'}} />
        <Carousel.Caption>
        <h1>Sanidhya Foundation</h1>
          <p>prioritising health of our elderly</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={pqr} style={{width:'100%', height:'600px'}} />
        <Carousel.Caption>
        <h1>Sanidhya Foundation</h1>
          <p>prioritising health of our elderly</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Courosel;