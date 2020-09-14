import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import useWindowDimensions from './WindowDimensions'
import '../styles/globalstyles.css';

const HeadCarousel = () => {

    const { height, width } = useWindowDimensions();

    return (
        <Container>
          <Carousel>
            <Carousel.Item className="carouselImages">
              {/* The require keyword is needed*/}
              <img
                className="d-block carouselImages"
                src={require("../images/image1.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carouselImages"
                src={require("../images/image2.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carouselImages"
                src={require("../images/image3.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
    );
}

export default HeadCarousel;