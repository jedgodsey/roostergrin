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
  return (
    <div id="grid-container">
      <div className="lorem-cell">
        <div className="lorem">
          <h3>LOREM IPSUM</h3>
          <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat .</p>
          <a href="">
            <img src={purplelorem} className="purple-lorem" />
          </a>
        </div>
      </div>
      <div className="grid-image bounding">
        <img src={help} className="full-image" />
      </div>
      <div className="grid-wide bounding" id="laptop">
        <img src={laptop} className="full-image" />
        <div className="content">
          <div className="button-box">
            <h3>LOREM IPSUM</h3>
            <a href="">
              <img src={orangebutton} className="button" />
            </a>
          </div>
          <div className="offset-box"></div>
        </div>
      </div>
      <div className="lorem-cell">
        <div className="lorem">
          <h3>LOREM IPSUM DOLOR SIT AMET</h3>
          <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
          <a href="">
            <img src={purplelorem} className="purple-lorem" />
          </a>
        </div>
      </div>
      <div id="icons">
        <div id="icons-box">
          <div className="icon-row">
            <a href="">
              <div className="subject-box">
                <img src={clipboard} className="icons" />
                <h5>LOREM</h5>
              </div>
            </a>
            <a href="">
              <div className="subject-box">
                <img src={mask} className="icons" />
                <h5>LOREM IPSUM</h5>
              </div>
            </a>
          </div>
          <div className="icon-row">
            <a href="">
              <div className="subject-box">
                <img src={goggles} className="icons" />
                <h5>LOREM IPSUM</h5>
              </div>
            </a>
            <a href="">
              <div className="subject-box">
                <img src={calendar} className="icons" />
                <h5>LOREM</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="grid-wide bounding" id="girl">
        <img src={girl} className="full-image" />
        <div className="content">
          <div className="offset-box"></div>
          <div className="button-box">
            <h3>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
            <a href="">
              <img src={orangebutton} className="button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid
