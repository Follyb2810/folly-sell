import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import * as IMG from '../images/Image';
import Image from 'next/image';
import { Container } from '@mui/material';

function Reslider() {
  return (
    <Container>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        showStatus={true}
        showIndicators={true}
        thumbWidth={50}
        stopOnHover={true}
        showThumbs={false}
      >
        <div>
          <h3>Slide 1</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 2</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
      </Carousel>
    </Container>
  );
}

export default Reslider;
