import React from "react";
import Returnbook from "./Returnbook";
import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";

const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 
                d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-evenly align-items-center">
              <Returnbook />
              <Returnbook />
              <Returnbook />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-evenly align-items-center">
              <Returnbook />
              <Returnbook />
              <Returnbook />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-evenly align-items-center">
              <Returnbook />
              <Returnbook />
              <Returnbook />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="d-flex justify-content-center align-items-center">
          <Returnbook />
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg">View More</a>
      </div>
    </div>
  );
};

export default Carousel;
