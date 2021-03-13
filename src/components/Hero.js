import hero from '../assets/hero.jpg';
import whitelogo from '../assets/logo-white.svg';
import purplebutton from '../assets/purple-button.png';

const Hero = () => {
  return (
    <div id="hero" className="bounding">
      <img src={hero} className="full-image" id="hero-fade" />
      <div className="hero-content">
        <div id="top-box">
          <div id="logo-box"><img src={whitelogo} id="white-logo" /></div>
        </div>
        <div id="welcome-box">
          <h1 id="welcome-text" className="turn-white">WELCOME TO</h1>
          <h2 id="hero-text" className="turn-white">Rooster Grin</h2>
          <a href="">
            <img src={purplebutton} className="button" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
