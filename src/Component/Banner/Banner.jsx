import  './Banner.css';
import img from '../../images/IMG.png';
import {FaArrowDown} from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Banner=()=>{
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
    const goTo=()=>{
        window.scrollTo({top:650 ,behavior:'smooth'})
    }
    return(
        <div className='Banner' data-aos="fade-up">
            <div className="leftBanner" data-aos="fade-up">
                <h1 data-aos="fade-right">Where Creativity Meets Lifestyle, Tech, and Thoughtful Reflections.</h1>
                <p data-aos="fade-right"><Typewriter
            words={['Discover, Explore, and Share Adventures.', 'Where Every Bite Tells a Delicious Story.', 'Your Unique Fashion Statement.', "Exploring Tomorrow's Technology Today."]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          /></p>
                <Link to='/create' style={{textDecoration:'none'}}><button className='create-btn'>CREATE BLOG</button></Link>
            </div>
            <div className="rightBanner" data-aos="fade-up">
                <img src={img} alt="image not found!" data-aos="fade-left" />
            </div>
            <div className='arrow'>
                <button className='arrow-btn' onClick={goTo}><FaArrowDown/></button>
            </div>
        </div>
    )
}
export default Banner