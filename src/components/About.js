import React from 'react'
import image from './img/aboutimage.jpg';
import './css/about.css';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-header'>
          <p>Our Story</p>
          <h2 className='h2-text'>Lend a Hand, Save a Paw</h2>
        </div>
        <div className='about-body'>
          <div className='second-body'>

          <p>
            Pet Heaven is a registered charity and non-profit pet shelter that has been in
            existence since 2006. 
          </p>
          <p>All the pets in the shelter were rescued from the
          streets or from being culled.</p>
          <p>
            About 80 Singapore Specials currently call this shelter home and needless to say,
            it can only be sustained with help from trusty volunteers and kind donations or sponsorships.
          </p>
          
          <p>
            Stray rescue in Singapore is a long tiring journey. Join us to be their Voice. Join us to Lend a Hand, Save a Paw.
            </p>
            
          <img src={image} />
          <p>If you wish to contribute to our cause, find out how by contacting us on our form.
          </p>
          <p>Thank you for helping us help them, from the deepest of our hearts.</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default About;