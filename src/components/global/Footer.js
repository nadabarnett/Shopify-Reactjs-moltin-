import React, { Fragment } from 'react';
import MailingList from './MailingList';

import Button_Call_Us_Now from './Button_Call_Us_Now.png';
import Button_Email_Us from './Button_Email_Us.png';
import Button_Chat_With_Us from './Button_Chat_With_Us.png';
import Paypal from './Paypal.png';
import Visa from './Visa.png';
import Mastercard from './Mastercard.png';
import American_Express from './American_Express.png';
import Purolator from './Purolator.png';
import UPS from './UPS.png';
const Footer = () => (
  <Fragment>
    <footer class="footer-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="contact-area">
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">
                    <img src={Button_Call_Us_Now} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Button_Email_Us} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Button_Chat_With_Us} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" />Mon - Fri : 9AM to 5PM <br />Sat - Sun : Closed
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <div class="about-us-area">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">About Agridepot</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
                <li>
                  <a href="#">Bulk Pricing</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Advertise with Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="customer-area">
              <ul>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Start a Return</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
                <li>
                  <a href="#">Report a Damaged Item</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-8 col-sm-offset-2 col-md-offset-0">
            <div class="paymnet-area">
              <div class="row">
                <div class="col-xs-12">
                  <p>Payment Options</p>
                </div>
                <div class="col-xs-3 col-md-4">
                  <a href="">
                    <img src={Paypal} alt="" />
                  </a>
                </div>
                <div class="col-xs-3 col-md-4">
                  <a href="">
                    <img src={Visa} alt="" />
                  </a>
                </div>
                <div class="col-xs-3 col-md-4">
                  <a href="">
                    <img src={Mastercard} alt="" />
                  </a>
                </div>
                <div class="col-xs-3 col-md-4">
                  <a href="">
                    <img src={American_Express} alt="" />
                  </a>
                </div>
                <div class="col-xs-12">
                  <p>
                    <span>Shipping</span>
                  </p>
                </div>
                <div class="col-xs-3 col-xs-offset-3  col-md-4 col-md-offset-0">
                  <a href="">
                    <img src={Purolator} alt="" />
                  </a>
                </div>
                <div class="col-xs-3 col-md-4">
                  <a href="">
                    <img src={UPS} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right dark-bg">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="condition">
                <ul>
                  <li>
                    <a href="#">Conditions d’utilisation</a>
                  </li>
                  <li>
                    <a href="#">Politique de confidentialité</a>
                  </li>
                  <li>
                    <a href="#">Compte entreprise</a>
                  </li>
                  <li>
                    <a href="#">Publicités ciblées</a>
                  </li>
                </ul>
              </div>
              <div class="copy-right-text">
                <p>&copy; 2018 - Agridepot.com - All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
