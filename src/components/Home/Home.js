import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img' data-aos="fade-down-right">
              <img src='./images/home.png' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1 data-aos="fade-down-right">
              I AM A <br />
              True Muslim
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-pinterest pinterest'></i>
              <i className='fab fa-dribbble dribbble'></i>
            </div>
            <p data-aos="fade-down-right">Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
