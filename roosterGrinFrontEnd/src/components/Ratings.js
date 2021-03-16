import { useState, useEffect } from 'react';
import ContentModel from '../models/ContentModel';
import stars from '../assets/stars.png';

const Ratings = () => {

  let [slide1, setSlide1] = useState({id: 0, location: '', title: '', text: ''})
  let [slide2, setSlide2] = useState({id: 0, location: '', title: '', text: ''})
  let [slide3, setSlide3] = useState({id: 0, location: '', title: '', text: ''})

  useEffect(() => {
    fill('slide1', setSlide1)
    fill('slide2', setSlide2)
    fill('slide3', setSlide3)
  }, [])

  const fill = (location, func) => {
    ContentModel.getOne(location)
      .then(info => {
        func(info)
      })
  }

  return (
    <div id="ratings-box">
      <div id="exclamation-box">
        <h3>LOREM IPSUM DOLOR SIT AMET</h3>
        <img src={stars} id="stars" />
      </div>
      <div id="carousel-box">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide">
                <h6>{slide1.title}</h6>
                <p>{slide1.text}</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide">
                <h6>{slide2.title}</h6>
                <p>{slide2.text}</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide">
                <h6>{slide3.title}</h6>
                <p>{slide3.text}</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Ratings;
