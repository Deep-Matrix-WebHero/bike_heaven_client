import React from "react";
import "./Gallery.css";
import gallery1 from "../../Images/bike1.jpg";
import gallery2 from "../../Images/bike2.jpg";
import gallery3 from "../../Images/bike1.jpg";
import gallery4 from "../../Images/bike4.jpg";
import gallery5 from "../../Images/bike1.jpg";
import gallery6 from "../../Images/bike2.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="blog-text m-5">
        <h1 className="text-center text-Warning">Our Gallery</h1>
      </div>
      <div className="blogs-section gal">
        <div className="blog-card">
          <img src={gallery1} className="blog-image" alt="" />
        </div>
        <div className="blog-card">
          <img src={gallery2} className="blog-image" alt="" />
        </div>
        <div className="blog-card">
          <img src={gallery3} className="blog-image" alt="" />
        </div>
        <div className="blog-card">
          <img src={gallery4} className="blog-image" alt="" />
        </div>
        <div className="blog-card">
          <img src={gallery5} className="blog-image" alt="" />
        </div>
        <div className="blog-card">
          <img src={gallery6} className="blog-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
