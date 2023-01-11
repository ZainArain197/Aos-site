import React from "react";
import ServicesData from "./ServicesData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section className='Services topMarign'>
        <div className='container'>
          <div className='heading'>
            <h3>MY SERVICES</h3>
            <h1>Interactive Services Offered By Me</h1>
          </div>

          <div className='contain grid topMarign'>
            {ServicesData.map((val) => {
              return (
                <div className='box'>
                  <div className='img'  data-aos="flip-left" >
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
