import socials from '../assets/socials.png';

const Footer = () => {
  return (
    <div id="footer-background">
      <div id="follow-box">
        <p>Follow Us:</p>
        <div id="follow-links">
          <img src={socials} id="social-logos"/>
        </div>
      </div>
    </div>
  )
}

export default Footer;
