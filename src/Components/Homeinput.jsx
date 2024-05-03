import React from 'react'
import './Navbar.css'
import experience from '../Assets/images-20240427T073852Z-001/images/experience.png'
import customization from '../Assets/images-20240427T073852Z-001/images/customization.png'
import Homecarousel from './Homecarousel'
import Homeimg from './Homeimg'




const Homeinput = () => {
    return (
        <div>
            <div className='container'>
                <div className="container-1 d-flex  ">
                    <div className="input1 border-end border-2 m-2">
                        <i class="fa-solid fa-location-dot" ></i>
                        <span className='m-2'>Loaction</span>
                        <div className="text1 ">
                            <input type="location" placeholder='where are your going?' className='border-0' />
                        </div>
                    </div>
                    <div className="input1 border-end border-2 m-2">
                        <i class="fa-solid fa-location-dot" ></i>
                        <span className='m-2'>Distance</span>
                        <div className="text1 ">
                            <input type="text" placeholder='Distance k/m' className='border-0' />
                        </div>
                    </div>
                    <div className="input1  m-2">
                        <i class="fa-solid fa-user-group"></i>
                        <span className='m-2'>Max People</span>
                        <div className="text1 ">
                            <input type="number" placeholder='0' className='border-0' />
                        </div>
                    </div>
                    <div className="input1-2 " id='input1-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
                {/*  */}
                <div className=''>
                    <div className="section-3 d-flex ">
                        <div className="secjr-0">
                            <span className='text-danger'>what we serve</span>
                            <h3 className='sec-p'>we offer our <br />best service</h3>
                        </div>

                        <div className="secjr-1">
                            <img src={customization} alt="" />
                            <h5>Calculate weather</h5>
                            <p>Lorem ipsum dolor sit amet,<br />
                                consectetur adipisicing elit.<br />
                                Doloremque ducimus temporibus<br />
                                rem illo ratione et error adipisci<br />
                                tenetur impedit architecto, saepe .
                            </p>
                        </div>
                        <div className="secjr-1">
                            <img src={customization} alt="" />                        <h5>Calculate weather</h5>
                            <p>Lorem ipsum dolor sit amet,<br />
                                consectetur adipisicing elit.<br />
                                Doloremque ducimus temporibus<br />
                                rem illo ratione et error adipisci<br />
                                tenetur impedit architecto, saepe .
                            </p>
                        </div>
                        <div className="secjr-1">
                            <img src={customization} alt="" />
                            <h5>Calculate weather</h5>
                            <p>Lorem ipsum dolor sit amet,<br />
                                consectetur adipisicing elit.<br />
                                Doloremque ducimus temporibus<br />
                                rem illo ratione et error adipisci<br />
                                tenetur impedit architecto, saepe .
                            </p>
                        </div>

                    </div>
                    <div className="sect-4  d-flex">
                        <div className="sect-411">
                            <div className="secjr-4">
                                <p className='sp-4'>Experience</p>
                                <h3>With our all experience <br />we will serve you </h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda  <br />omnis, minima quae deserunt culpa et, repellat accusantium nulla .</p>
                            </div>
                            <div className="sect-41 d-flex">
                                <div className="sec-42">
                                    <p className='p-11'>12+</p>
                                    <span className='p-s'>Successfull  <br />Trips</span>
                                </div>
                                <div className="sec-42">
                                    <p className='p-12'>2k+</p>
                                    <span className='p-s'>Regualr  <br />clients</span>
                                </div>
                                <div className="sec-42">
                                    <p className='p-13'>15</p>
                                    <span className='p-s'>Year's <br />experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="sect4-img">
                            <img src={experience} alt="" />
                        </div>
                    </div>
                    <Homeimg />
                    <Homecarousel />

                </div>


            </div>
           
        </div>




    )
}

export default Homeinput
