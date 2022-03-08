import React from "react";
import {Container} from "react-bootstrap";
import bike0 from "../../Images/bike1.jpg";
import bike1 from "../../Images/bike2.jpg";
import bike2 from "../../Images/bike1.jpg";
import bike3 from "../../Images/bike4.jpg";
const About = () => {
  return (
    <div>
      <Container>
        <div className="d-lg-flex mt-5">
          <div>
            <h3 className="mt-5 component-headings pb-2">About Us</h3>

            <p className="pe-4 word-break text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              explicabo nesciunt hic fugiat enim consequuntur.
            </p>
          </div>
          <div>
            <div className="row">
              <div className="col">
                <img src={bike0} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <img src={bike1} alt="" className="img-fluid" />
              </div>
              <div className="col-4">
                <img src={bike2} alt="" className="img-fluid" />
              </div>
              <div className="col-4">
                <img src={bike3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
