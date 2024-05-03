
import React from 'react';
import './Navbar.css'
import galleryone from '../Assets/images-20240427T073852Z-001/images/gallery-01.jpg';
import gallerytwo from '../Assets/images-20240427T073852Z-001/images/gallery-02.jpg';
import gallerythree from '../Assets/images-20240427T073852Z-001/images/gallery-03.jpg';
import galleryfour from '../Assets/images-20240427T073852Z-001/images/gallery-04.jpg';
import galleryfive from '../Assets/images-20240427T073852Z-001/images/gallery-05.jpg';
import gallerysix from '../Assets/images-20240427T073852Z-001/images/gallery-06.jpg';
import galleryseven from '../Assets/images-20240427T073852Z-001/images/gallery-07.jpg';
import galleryeight from '../Assets/images-20240427T073852Z-001/images/gallery-08.jpg';

const Homeimg = () => {
    return (
        <div className=''>
            <div className='gallary-head container'>
                <p className='gallary-child bg-warning rounded-pill'>Gallery</p>
                <h2>Visit our customers tour gallery</h2>
                <div className='gallary'>
                    <div className='src-gallary'>
                        <img src={galleryone} alt="" className='galleryone' />
                    </div>
                    <div className='src-gallary'>
                        <img src={gallerytwo} alt="" className='gallerytwo' />
                    </div>
                    <div className='src-gallary'>
                        <img src={galleryfour} alt="" className='galleryfour' />
                    </div>
                    <div className='src-gallary'>
                        <img src={gallerythree} alt="" className='galleryfour' />
                    </div>
                </div>
            </div>
            <div className='second-gallary'>
                <div className='second-gallary-child'>
                    <div className='second-gallary-sub-child'>
                        <img src={galleryfive} alt="" className='galleryfive' />
                    </div>
                    <div className='second-gallary-sub-child'>
                        <img src={gallerysix} alt="" className='gallerysix' />
                    </div>
                    <div className='second-gallary-sub-child'>
                        <img src={galleryseven} alt="" className='galleryseven' />
                    </div>
                    <div className='second-gallary-sub-child'>
                        <img src={galleryeight} alt="" className='galleryeight' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homeimg;
