import img from "../../images/BLOGIFY.jpg";
import { Link } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";
import "./Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Navbar = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
    return (
        <>
      <input type="checkbox"  id="check" />
      <nav data-aos="fade-up" className="nav">
        <img src={img} alt="Logo" className="img" />
        <ol>
          <Link to="/"><li className="item">HOME</li></Link>
          <Link to="/"><li className="item">ABOUT</li></Link>
          <Link to="/"><li className="item">CONTACT</li></Link>
          <Link to="/login"><li className="item">LOGOUT</li></Link>
        </ol>
        <label htmlFor="check" className="bar">
            <span className="FaBars" id="FaBars"><FaBars/></span>
            <span className="FaTimes" id="FaTimes"><FaTimes/></span>
        </label>
      </nav>
    </>
  );
};
export default Navbar;
