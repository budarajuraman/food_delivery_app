import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Food Basket is your go-to app for delicious food delivered straight to your door. We partner with the best local restaurants to bring you a wide variety of cuisines, from the comfort of your home.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>  
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+916304090747</li>
                    <li>ramanrahul114@gmail.com</li>
                </ul> 
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Food Basket.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
