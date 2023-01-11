import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Branding = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
  ]
  return (
    <>
      <section className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para' data-aos="zoom-in-right">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
