import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as IMG from '../images/Image';
import Image from 'next/image';
import { Container } from '@mui/material';

function Reslider() {
  return (
    <Container>
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
        }}
        infinite
        autoPlay
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        <div>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo2} alt="Slide 2" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
     
      </Carousel>
    </Container>
  );
}

export default Reslider;
