import React from 'react'
import Homeinput from './Homeinput';
import world from '../Assets/images-20240427T073852Z-001/images/world.png';
import '../Components/Navbar.css'
import img1 from'../Assets/images-20240427T073852Z-001/images/hero-img01.jpg'
import img2 from'../Assets/images-20240427T073852Z-001/images/hero-video.mp4'
import img3 from'../Assets/images-20240427T073852Z-001/images/hero-img02.jpg'
import Footer from './Footer';
import male from '../Assets/images-20240427T073852Z-001/images/male-tourist.png'

// import Homeimg from './Homeimg'




const Home = () => {
  return (
   <div>
    <div className=' mt-5 container' >
      <div className="   home row  ">
        <div className="home-2 col-md-6" >
          <span className='text' >Know before you go</span>
          <img src={world} alt="" width={'50px'} className='world-img' />
          <p className='p-home'>Travelling opens the doors <br />
            to creating  <span className='span-home'>memories</span>
          </p>
          <p>Lorem ipsum dolor sit, amet consecteturbr
            adipisicing elit. Eos modi, eaque ipsa 
            quisquam velit voluptatum fuga, deserunt blanditiisbr
            iure quasi omnis hic rationebr 
              qui suscipit  culpabr
            nobis quia odio consectetur Lorem ipsum dolorkhadar absjkd dve 
            sit amet consectetur adipisicing elit. Totam culpa
            nihil modi, eligendi similique,a exercitationem earum 
            odio doloribus nulla veritatis doloremque. Impedit quos  
            sapiente nesciunt exercitationem inventore molestias velit ipsa..</p>
        </div>
        <div className="img-home col-md-6">
          <div className="img1">
           <img src={img1} className='img22' id='id1' alt="" />
           <video controls  autoPlay className='video' id='video1'><source src={img2}/></video> 
           <img src={img3} className='img22' id='id' alt="" /> 
            
          </div>
        </div>
        

      </div>
      
    </div>
    <Homeinput/>
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
    // inputs 
   
  )
}

export default Home
