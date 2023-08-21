import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as IMG from '../images/Image';
import { Container } from '@mui/material';
import Image from 'next/image';

function Slidoo() {
  return (
    <Container>
      <Carousel
        showArrows={false} // Hide default arrows
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        showStatus={true}
        showIndicators={true}
        thumbWidth={100}
        stopOnHover={true}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} style={{ zIndex: 2, left: 15 }}>
              Previous
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} style={{ zIndex: 2, right: 15 }}>
              Next
            </button>
          )
        }
      >
        <div>
          <h3>Slid00000 1</h3>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 2</h3>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
        <div>
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo3} alt="Slide 3" />
        </div>
      </Carousel>
    </Container>
  );
}

export default Slidoo;
