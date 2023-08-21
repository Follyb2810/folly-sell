import { Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import * as IMG from '../images/Image'
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

function SliderCarousel() {
  return (
   <Container>
   <Carousel>
   <div>
   <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 1</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 2</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 3</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 3</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 3</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 3</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 3</h3>
   </div>
   <div>
<Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
     <h3>Slide 3</h3>
   </div>
 </Carousel>
   </Container>
  );
}

export default SliderCarousel;
