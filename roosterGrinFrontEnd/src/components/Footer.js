import socials from '../assets/socials.png';

const Footer = () => {
  return (
    <div id="footer-background">
      <div id="follow-box">
        <p>Follow Us:</p>
        <div id="follow-links">
          <a href="">
            <img src={socials} id="social-logos"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
