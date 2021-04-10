import React, { createRef }from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

const HeadCarousel = () => {

    const { docs } = useFirestore('carousel-images');
    const wrapper = createRef();

    return (
        <Container>
          <Carousel>
            {docs && docs.map(doc => (
              <Carousel.Item ref={wrapper} key={doc.placement} className="carouselImages">
              {/* The require keyword is needed*/}
              <img
                className="d-block carouselImages"
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