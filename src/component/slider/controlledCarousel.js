import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap';



import img1 from "../../assets/img/slide1.png"
import img2 from "../../assets/img/slider2.jpg"
import img3 from "../../assets/img/slider-3.jpg"
import img4 from "../../assets/img/slider-4.jpg"
import './carousel.css'

export default function ControlledCarouselku() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel id="carousel" style={{height: "600px"}} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{height: "600px"}}
          />
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{height: "600px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{height: "600px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Fourth slide"
            style={{height: "600px"}}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
