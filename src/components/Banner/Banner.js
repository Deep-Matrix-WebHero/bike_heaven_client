import React from "react";
import {Carousel} from "react-bootstrap";
import banner1 from "../../Images/bike1.jpg";
import banner2 from "../../Images/bike2.jpg";
import banner3 from "../../Images/bike1.jpg";
import banner4 from "../../Images/bike4.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-white">Enjoy Your</h3>
            <h1 className="fw-bold text-white">Winter Vacation</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              amet?.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-white">Enjoy Your</h3>
            <h1 className="fw-bold text-white">Snow adventure</h1>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              dolor..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-white">Enjoy Your</h3>
            <h1 className="fw-bold text-white">Summer vacation</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, alias..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-white">Enjoy Your</h3>
            <h1 className="fw-bold text-white">Spring vacation</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              tempore?.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
