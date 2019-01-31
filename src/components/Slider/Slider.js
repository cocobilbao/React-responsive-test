import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img from './images/slide1.png';
import img2 from './images/slide2.png';
import img3 from './images/slide3.png';

export default class Slider extends Component {

  render() {
    return (
      <Carousel>
      <Carousel.Item>
        <img width={1300} height={500} alt="slide" src={img} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1300} height={500} alt="slide" src={img3} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1300} height={500} alt="slide" src={img2} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}
