// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';

// import banner1 from '../../../images/banner/1.jpg'
// import banner2 from '../../../images/banner/2.jpg'
// import banner3 from '../../../images/banner/4.jpg'

// const Banner = () => {
//     // const [index, setIndex] = useState(0);

//     // const handleSelect = (selectedIndex, e) => {
//     //   setIndex(selectedIndex);
//     // };
//     return (





//     //     <Carousel activeIndex={index} onSelect={handleSelect}>
//     //   <Carousel.Item>
//     //     <img
//     //       className="d-block w-100"
//     //       src={banner1}
//     //       alt="First slide"
//     //     />
//     //     <Carousel.Caption>
//     //       <h3>First slide label</h3>
//     //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     //     </Carousel.Caption>
//     //   </Carousel.Item>
//     //   <Carousel.Item>
//     //     <img
//     //       className="d-block w-100"
//     //       src={banner2}
//     //       alt="Second slide"
//     //     />

//     //     <Carousel.Caption>
//     //       <h3>Second slide label</h3>
//     //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     //     </Carousel.Caption>
//     //   </Carousel.Item>
//     //   <Carousel.Item>
//     //     <img
//     //       className="d-block w-100"
//     //       src={banner3}
//     //       alt="Third slide"
//     //     />

//     //     <Carousel.Caption>
//     //       <h3>Third slide label</h3>
//     //       <p>
//     //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//     //       </p>
//     //     </Carousel.Caption>
//     //   </Carousel.Item>
//     // </Carousel>
    // );
// };

// export default Banner;
import React from 'react';
import './Banner.css';

import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/4.jpg'

const Banner = () => {
    return (
        <div className='body'>
            <div className='wrapper'>
            <div className='card'>
                <img src={banner1} alt="" />
                <div className='info'>
                    <h1>JACK DANIEL</h1>
                    <p className='text-light'>The Best We Preafer</p>
                    <a href ="#" className='btn'>Read More</a>
                </div>
            </div>

            <div className='card'>
                <img src={banner2} alt="" />
                <div className='info'>
                    <h1>SPLENDID WOOD</h1>
                    <p>The Best We Have</p>
                    <a href ="#" className='btn'>Read More</a>
                </div>
            </div>

            <div className='card'>
                <img src={banner3} alt="" />
                <div className='info'>
                    <h1>SAVUAGE</h1>
                    <p>THe best we stock</p>
                    <a href ="#" className='btn'>Read More</a>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Banner;