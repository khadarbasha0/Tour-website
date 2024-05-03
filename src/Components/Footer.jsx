import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import male from '../Assets/images-20240427T073852Z-001/images/male-tourist.png'

import logo from '../Assets/images-20240427T073852Z-001/images/logo.png'


const Footer = () => {
    return (
        <div>
            {/* <div className="banner  d-flex  mt-5">
                <div className="banner1">
                    <h3>Subscribe now for usefull travelling information</h3>
                    <input type="text" placeholder='Enter your email' className='input' />
                    <button>Subscribe</button>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas quia sapiente ipsam eum, deserunt obcaecat.</p>
                </div>
                <div className="banner2">
                    <img src={male} alt="" />
                </div>
            </div> */}
            <div className="footer">
                <div className="f-img d-flex mt-3 p-4">
                    <div className="img16">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Delejdfoiifk kkjia kow0 b 93hfsof</p>

                        <div className="icons ">
                            <Link className="link-without p-2" to='https://www.naukri.com/mnjuser/profile?id=&altresid' ><i class="fa-solid fa-user"></i></Link>
                            <Link className="link-without p-2" to='https://github.com/khadarbasha0' ><i class="fa-brands fa-github"></i></Link>
                            <Link className="link-without p-2" to='https://www.instagram.com/blacky_kb/?next=%2F&hl=en' ><i class="fa-brands fa-instagram"></i></Link>
                            <Link className="link-without p-2" to='https://www.linkedin.com/in/khadar-kb-497996217/' ><i class="fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>
                    <div className="discover">
                        <h2>Discover</h2>
                        <ul>
                            <li> <Link to='/' className="link-without-decoration" >Home</Link></li>
                            <li><Link to='/Home' className="link-without-decoration">About</Link></li>
                            <li> <Link to='/Tours' className="link-without-decoration">Tours</Link></li>
                        </ul>

                    </div>
                    <div className="quicklink">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link to='/' className="link-without-decoration">Gallery</Link></li>
                            <li> <Link to='/Register' className="link-without-decoration">Register</Link></li>
                            <li>  <Link to='/Login' className="link-without-decoration">Login</Link></li>
                        </ul>
                    </div>
                    <div className="contact ">
                        <h2>Contant</h2>

                        <p><i class="fa-solid fa-location-dot"></i> <b>ADDRESS :</b> marathahalli ,Karanataka  </p>
                        <p><i class="fa-regular fa-envelope"></i> <b>Email :</b> khadarkb786@gmail.com</p>
                        <p><i class="fa-solid fa-phone"></i>  <b>Phone :</b> +91 6301030048</p>

                    </div>
                    

                </div>

            </div>
            <hr />
            <div className="foot-last">
                Copyright 2024, Design and develop by Khadar Basha. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
