import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import * as IMG from '../images/Image';
import { Container } from '@mui/material';
import * as IMG from '../images/Image';
// import { Container } from '@mui/material';
import Image from 'next/image';
// import './Reslider.css'; // Import custom CSS for styling

function Reslider() {
  return (
    <Container>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        // customButtonGroup={<ButtonGroup />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="carousel-card">
          <h3>Slide 1</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 2</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 3</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 4</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 5</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 6</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 7</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
        <div className="carousel-card">
          <h3>Slide 8</h3>
          <Image width='30px' height='40px' src={IMG.logo1} alt="Slide 1" />
        </div>
      </Carousel>
    </Container>
  );
}

// Custom button group component
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="custom-button-group">
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Reslider;
