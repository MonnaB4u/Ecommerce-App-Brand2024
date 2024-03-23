import React from 'react';
import './Footer.css'
import brand from '../../Photos/logo-colored.png'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appimg1 from '../../Photos/market-button1.png'
import appimg2 from '../../Photos/market-button.png'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footerHead '>
            <div className="footerGrid ">
                <div className="logoPart">
                    <img src={brand} alt="" />
                    <p>Best information about the company gies here but now lorem ipsum is</p>
                    <div className="footerLogos">
                    <FaFacebook className='border' style = {{ fontSize: "2rem", background:"#BDC4CD" }}/>
                    <FaTwitter className='border' style = {{ fontSize: "2rem", background:"#BDC4CD" }}/>
                    <FaLinkedin className='border' style = {{ fontSize: "2rem", background:"#BDC4CD" }}/>
                    <FaInstagram  className='border' style = {{ fontSize: "2rem", background:"#BDC4CD" }}/>
                    <FaYoutube  className='border' style = {{ fontSize: "2rem", background:"#BDC4CD" }}/>
                    </div>
                </div>
                <div className="logoAbout">
                    <h4 className="footertextHeader">About</h4>
                    <p>About Us</p>
                    <p>Find store</p>
                    <p>Categories</p>
                    <p>Blogs</p>
                </div>
                <div className="logoPartner">
                    <h4 className="footertextHeader">Partnership</h4>
                    <p>About Us</p>
                    <p>Find store</p>
                    <p>Categories</p>
                    <p>Blogs</p>
                </div>
                <div className="logoInfo">
                    <h4 className="footertextHeader">Informaton</h4>
                    <p>Help Cener</p>
                    <p>Money Refund</p>
                    <p>Shipping</p>
                    <p>Contact us</p>
                </div>
                <div className="logoUser">
                    <h4 className="footertextHeader">For users</h4>
                    <p>Login</p>
                    <p>Register</p>
                    <p>Settings</p>
                    <p>My Orders</p>
                </div>
                <div className="logoApp">
                    <h4 className="footertextHeader">Get app</h4>
                    <img src={appimg1} alt="" />
                    <div className="">
                        <img src={appimg2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;