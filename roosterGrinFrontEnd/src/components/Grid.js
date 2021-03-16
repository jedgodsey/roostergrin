import { useState, useEffect } from 'react';
import ContentModel from '../models/ContentModel';
import orangebutton from '../assets/orange-button.png';
import help from '../assets/help.jpg';
import laptop from '../assets/laptop.jpg';
import girl from '../assets/girl.jpg';
import purplelorem from '../assets/purple-lorem.png';
import goggles from '../assets/goggles.png';
import mask from '../assets/facemask.png';
import calendar from '../assets/calendar.png';
import clipboard from '../assets/clipboard.png';

const Grid = () => {
  let [grid1, setGrid1] = useState({id: 0, location: '', title: '', text: ''})
  let [grid2, setGrid2] = useState({id: 0, location: '', title: '', text: ''})
  let [grid3, setGrid3] = useState({id: 0, location: '', title: '', text: ''})
  let [grid4, setGrid4] = useState({id: 0, location: '', title: '', text: ''})

  useEffect(() => {
    fill('grid1', setGrid1)
    fill('grid2', setGrid2)
    fill('grid3', setGrid3)
    fill('grid4', setGrid4)
  }, [])

  const fill = async (location, func) => {
    ContentModel.getOne(location)
      .then(info => {
        func(info)
      })
  }
  
  return (
    <div id="grid-container">
      <div className="lorem-cell">
        <div className="lorem">
          <h3>{grid1.title}</h3>
          <p>{grid1.text}</p>
          <a href="/utility">
            <img src={purplelorem} className="purple-lorem" />
          </a>
        </div>
      </div>
      <div className="grid-image bounding">
        <img src={help} className="full-image" id="help" />
      </div>
      <div className="grid-wide bounding">
        <img src={laptop} className="full-image" id="laptop" />
        <div className="content">
          <div className="button-box">
            <h3>{grid2.title}</h3>
            <p>{grid2.text}</p>
            <a href="/utility">
              <img src={orangebutton} className="button" />
            </a>
          </div>
          <div className="offset-box"></div>
        </div>
      </div>
      <div className="lorem-cell">
        <div className="lorem">
          <h3>{grid3.title}</h3>
          <p>{grid3.text}</p>
          <a href="/utility">
            <img src={purplelorem} className="purple-lorem" />
          </a>
        </div>
      </div>
      <div id="icons">
        <div id="icons-box">
          <div className="icon-row">
            <a href="/utility">
              <div className="subject-box">
                <img src={clipboard} className="icons" />
                <h5>LOREM</h5>
              </div>
            </a>
            <a href="/utility">
              <div className="subject-box">
                <img src={mask} className="icons" />
                <h5>LOREM IPSUM</h5>
              </div>
            </a>
          </div>
          <div className="icon-row">
            <a href="/utility">
              <div className="subject-box">
                <img src={goggles} className="icons" />
                <h5>LOREM IPSUM</h5>
              </div>
            </a>
            <a href="/utility">
              <div className="subject-box">
                <img src={calendar} className="icons" />
                <h5>LOREM</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="grid-wide bounding" id="girl">
        <img src={girl} className="full-image" id="girl" />
        <div className="content">
          <div className="offset-box"></div>
          <div className="button-box">
            <h3>{grid4.title}</h3>
            <p>{grid4.text}</p>
            <a href="/utility">
              <img src={orangebutton} className="button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid
