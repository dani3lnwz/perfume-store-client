import React from 'react';
import './Footer.css';
import facebook from '../../../images/social/logo2.png';
import insta from '../../../images/social/logo1.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark mt-5'>
            <div className='mt-3'>
            <div className='container text-light'>
  <div className="row row-cols-4">
    <div className="col">
        <h4>Explore</h4>
        <p>Home</p>
        <p>Product</p>
        <p>New Arriable</p>
        <p>Brands</p>
    </div>
    <div className="col">
        <h4>Vist</h4>
        <p>Rampura Banasre <br /> Block:E, Housr No-217 <br />Dhaka Bangladesh</p>
    </div>
    <div className="col">
        <h4>Follow</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Pinterest</p>
        <p>Instragram</p>
    </div>
    <div className="col">
        <h4>Contact</h4>
        <h5>Daniel Newaz</h5>
        <p>Phone No: 01785989100</p>
    </div>
  </div>
</div>
            </div>
            <div  id='footer' className='text-center mt-2'>
            <img style={{width: '50px', marginLeft: '10px'}} src={insta} alt="" />
            {/* <img style={{width: '30px'}} src={facebook} alt="" /> */}
            <p className='text-light mt-2'>All RIGHT ARE RESERVED</p>
            <p id='foot' className='text-light'>copyright ©  {year} </p>
            </div>
            
        </footer>
    );
};

export default Footer;