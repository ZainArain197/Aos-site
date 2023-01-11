import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'  data-aos="fade-up" data-aos-offset="200">
            <img src='./images/logoo.png' alt='' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
          </div>

          <div className='box'  data-aos="zoom-in-right">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className='box'  data-aos="zoom-in-right">
            <h2>Recent Post</h2>
            <div className='text'>
              <p>Gamic Clouds Join Us</p>
              <span>  2023</span>
            </div>
            <div className='text'>
              <p>Gamic Clouds Join Us</p>
              <span>  2023</span>
            </div>
            <div className='text'>
              <p>Gamic Clouds Join Us</p>
              <span>  2023</span>
            </div>
          </div>

          <div className='box'  data-aos="zoom-in-right">
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>Faisalabad</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+92 3016047725</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>mzain@gmial.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'  data-aos="zoom-in-right">
          <p>Muhammad Zain Maqsood.</p>
          <label>
            Design & Developed by <span>ZAIN</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
