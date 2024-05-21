import React from 'react'
import './About.css'
import about_img  from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  const handlePlayClick = () => {
    setPlayState(true);
  };
  console.log('Received setPlayState:', setPlayState);
  return (
    <div className='about'>
      <div className="about_left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon' onClick={handlePlayClick}/>
        

      </div>
      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Emberk on a transformative educational journy with our university's comprehensive education programs.
            Our cutting-edge curriculum is designed to empower students with the knoledge , 
            skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
            With a focus on innovation, hands-on lerning, and personalized membership, our program prepare aspiring
            educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
            Whether you aspire to become a teacher, adminstarator,conselor, or educational leader, our diverse range of
            programs offers the perfect pathway to achive your goals and unlock your full potential
            in the shaping the future of education. 
        </p>
      </div>
    </div>
  )
}

export default About
