import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../../assets/darklogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="left">
          <h1>Pages</h1>
          <Link to={"/about"}>{`>`} About</Link>
          <Link to={"/disclaimer"}>{`>`} Disclaimer</Link>
          <Link to={"/contact"}>{`>`} Contact Us</Link>
        </div>

        <div className="center">
          <img src={logo} />
        </div>

        <div className="right">
          <h1>Social Media</h1>

          <div className="social-center">
            <BsLinkedin />
            <a href={"https://www.linkedin.com/in/rohit2k3/"}>LinkedIn</a>
          </div>
          <div className="social-center">
            <BsTwitter />
            <a href={"https://twitter.com/RohitSharma2k3"}>Twitter</a>
          </div>
          <div className="social-center">
            <BsInstagram />
            <a href={"https://instagram.com/rohit__2k3"}>Instagram</a>
          </div>
        </div>
      </div>
      <div className="center margin">
        <label>Copyright &copy; 2023 Question Paper Library</label>
      </div>
    </footer>
  );
};
export default Footer;
