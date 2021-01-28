import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {
  MDBContainer,
  MDBJumbotron,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from 'mdbreact';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <MDBJumbotron style={{ padding: 0, margin: 0 }}>
        <MDBCol
          className="text-white text-center py-5 px-4"
          style={{
            backgroundImage: `url(https://www.mountainphotography.com/images/xl/20100808-Ruby-Red-Sunset.jpg)`,
          }}
        >
          <MDBCol className="py-5">
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
              Create your beautiful website with MDBootstrap
            </MDBCardTitle>
            <p className="mx-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
              accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!
            </p>
            <MDBBtn outline color="white" className="mb-5">
              <MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
            </MDBBtn>
          </MDBCol>
        </MDBCol>
      </MDBJumbotron>
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol size="4">
            <MDBCol style={{ maxWidth: '22rem' }}>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCol>
          <MDBCol size="4">
            <MDBCol style={{ maxWidth: '22rem' }}>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCol>
          <MDBCol size="4">
            <MDBCol style={{ maxWidth: '22rem' }}>
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Click</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
