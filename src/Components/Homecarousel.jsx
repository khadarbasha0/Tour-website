import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Client1 from '../Assets/images-20240427T073852Z-001/images/ava-1.jpg';
import Client2 from '../Assets/images-20240427T073852Z-001/images/ava-2.jpg';
import Client3 from '../Assets/images-20240427T073852Z-001/images/ava-3.jpg';

const ClientsSlider = () => {
  const clients = [
    {
      name: 'Peter Alice',
      role: 'Customer',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci vero assumenda deserunt omnis voluptatum perspiciatis, laboriosam quas possimus ex similique voluptas, repellendus tempore. ',
      image: Client1
    },
    {
      name: 'John Doe',
      role: 'Client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat nisl eu diam bibendum, vitae tempus nunc laoreet. Fusce quis consequat elit. Integer vel lacus nec purus gravida dignissim.',
      image: Client2
    },
    {
      name: 'John Doe',
      role: 'Client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat nisl eu diam bibendum, vitae tempus nunc laoreet. Fusce quis consequat elit. Integer vel lacus nec purus gravida dignissim.',
      image: Client2
    },
    {
      name: 'John Doe',
      role: 'Client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat nisl eu diam bibendum, vitae tempus nunc laoreet. Fusce quis consequat elit. Integer vel lacus nec purus gravida dignissim.',
      image: Client2
    },
    {
      name: 'Jane Smith',
      role: 'Client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat nisl eu diam bibendum, vitae tempus nunc laoreet. Fusce quis consequat elit. Integer vel lacus nec purus gravida dignissim.',
      image: Client3
    },
    {
      name: 'Peter Alice',
      role: 'Customer',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci vero assumenda deserunt omnis voluptatum perspiciatis, laboriosam quas possimus ex similique voluptas, repellendus tempore. ',
      image: Client1
    },
    {
      name: 'John Doe',
      role: 'Client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat nisl eu diam bibendum, vitae tempus nunc laoreet. Fusce quis consequat elit. Integer vel lacus nec purus gravida dignissim.',
      image: Client2
    },
    {
      name: 'Jane Smith',
      role: 'Client',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat nisl eu diam bibendum, vitae tempus nunc laoreet. Fusce quis consequat elit. Integer vel lacus nec purus gravida dignissim.',
      image: Client3
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div >
          <p><span className='cont bg-warning rounded-pill p-1'>Client Love</span></p>
          <h2>What our clients say about us</h2>
        </div>
        <Slider {...settings}>

          {clients.map((client, index) => (
            <div key={index}>
              <div className='m-3'>
                <p>{client.description}</p>
                <div className="ClientInfo d-flex">
                  <div className="clientImg">
                    <img src={client.image} alt={client.name} />
                  </div>
                  <div className="ClientDetails ms-2">
                    <h5>{client.name}</h5>
                    <p>{client.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </>

      );
};

      export default ClientsSlider;
