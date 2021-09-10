import React, { createRef }from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

/**
 * Objective: Part of the homepage, cycles/carousels through predetermined pictures set in the firebase collection ('carousel-images')
 * Tree: Homepage.js/HeadCarousel.js
 */

const HeadCarousel = () => {

    const { docs } = useFirestore('carousel-images');
    const wrapper = createRef();

    return (
        <Container className="carouselImages">
          <Carousel>
            {docs && docs.map(doc => (
              <Carousel.Item ref={wrapper} key={doc.placement}>
              {/* The require keyword is needed*/}
              <img
                className="d-block carouselImages"
                style={{height: '430px', width: 'auto'}}
                src={(doc.url)}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{doc.title}</h3>
                <p>
                  {doc.caption}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        </Container>
    );
}

export default HeadCarousel;