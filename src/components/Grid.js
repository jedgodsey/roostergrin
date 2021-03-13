import orangebutton from '../assets/orange-button.png';
import help from '../assets/help.jpg';
import laptop from '../assets/laptop.jpg';
import girl from '../assets/girl.jpg';

const Grid = () => {
  return (
    <div id="grid-container">
      <div className="lorem-cell">
        <div className="lorem">
          <h3>LOREM IPSUM</h3>
          <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat .</p>
          <h6>&gt; Lorem Ipsum</h6>
        </div>
      </div>
      <div className="grid-image bounding">
        <img src={help} className="full-image" />
      </div>
      <div className="grid-wide" id="laptop">
        <img src={laptop} className="full-image" />
        <div className="button-box">
          <h3>LOREM IPSUM</h3>
          <img src={orangebutton} className="button" />
        </div>
        <div className="offset-box"></div>
      </div>
      <div className="lorem-cell">
      <div className="lorem">
          <h3>LOREM IPSUM DOLOR SIT AMET</h3>
          <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
          <h6>&gt; Lorem Ipsum</h6>
        </div>
      </div>
      <div id="icons">
        <div id="icons-box">
          <div className="subject-box">
            <div className="icon-box">
              <img src="" />
            </div>
            <h5>LOREM</h5>
          </div>
          <div className="subject-box">
            <div className="icon-box">
              <img src="" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
          <div className="subject-box">
            <div className="icon-box">
              <img src="" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
          <div className="subject-box">
            <div className="icon-box">
              <img src="" />
            </div>
            <h5>LOREM</h5>
          </div>
        </div>
      </div>
      <div className="grid-wide bounding" id="girl">
        <img src={girl} className="full-image" />
        <div className="offset-box"></div></div>
        <div className="button-box">
          <h3>LOREM IPSUM</h3>
          <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
          <img src={orangebutton} className="button" />
        </div>
    </div>
  )
}

export default Grid
