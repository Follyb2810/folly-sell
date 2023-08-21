import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as IMG from '../images/Image';
import Image from 'next/image';

import Slider from "react-slick";
import { Container } from '@mui/material';

const Slide = () => {
   
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        
      };
      const setting = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Autoplay slides
        autoplaySpeed: 1000, // Autoplay interval in milliseconds
      };
      return (
        <Container>
        <Slider {...settings}>
        <div>
          <h3>1</h3>
           <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>2</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>4</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>5</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div>
          <h3>6</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
      </Slider>
        </Container>
      )
}

export default Slide