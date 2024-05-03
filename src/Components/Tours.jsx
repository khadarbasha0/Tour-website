import React from 'react'
import './Navbar.css';
import Hinpute  from './Hinpute';
import Footer from './Footer';
import male from '../Assets/images-20240427T073852Z-001/images/male-tourist.png';
import tourbg from '../Assets/images-20240427T073852Z-001/images/tour.jpg'
const Tours = () => {
  return (
    <div>
      <div className="tour">


        <div class="image-container">

          <img src={tourbg} alt="Beach Image" />
          <div class="color-overlay"></div>
          <div className="text-container">
            <h2>ALL TOURS</h2>
          </div>
        </div>

      </div>
      <Hinpute/>
      <div className="banner  d-flex  mt-5">
                <div className="banner1">
                    <h3>Subscribe now for usefull travelling information</h3>
                    <input type="text" placeholder='Enter your email' className='input' />
                    <button>Subscribe</button>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas quia sapiente ipsam eum, deserunt obcaecat.</p>
                </div>
                <div className="banner2">
                    <img src={male} alt="" />
                </div>
            </div>
      <Footer/>
    </div>
  )
}

export default Tours
