import Carousel from 'react-bootstrap/Carousel';
import '../../../website/all_style/css/Slider.css'
function Slider() {
  return (
    <>
      <Carousel slide={false} >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require('../../all_style/img/slider/slider9.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-300 carousel-img "
            src={require('../../all_style/img/slider/slider11.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-300 carousel-img"
            src={require('../../all_style/img/slider/slider4.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </>
  );
}

export default Slider;