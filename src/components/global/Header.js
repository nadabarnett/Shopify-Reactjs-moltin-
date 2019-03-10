import React, { Fragment } from 'react';
import MailingList from './MailingList';

import Flag from './Flag.png';
import logo from './logo.png';
import Account from './Account.png';
import Favorites from './Favorites.png';
import Cart from './Cart.png';

const Header = () => (
  <Fragment>
    <div class="header-top dark-bg">
      <div class="row">
        <div class="col-xs-6">
          <p>Free shipping over $75</p>
        </div>
        <div class="col-xs-6 text-right">
          <p>
            <span>
              Français <img src={Flag} alt="Flag" /> $CAD
            </span>
          </p>
        </div>
      </div>
    </div>
    <header class="header-sec">
      <div class="container-fluid">
        <div class="logo-area">
          <div class="row">
            <div class="col-sm-3 col-xs-6">
              <div class="logo">
                <a href="">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div class="col-md-5 col-sm-6">
              <div class="search-area  hidden-xs">
                <input type="text" placeholder="Search for products…" />
                <a href="">
                  <i class="fa fa-search" />
                </a>
              </div>
            </div>
            <div class="col-md-4 col-sm-3 col-xs-6">
              <ul class="hidden-sm hidden-xs">
                <li>
                  <a href="">
                    <img src={Account} alt="" />Acount
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Favorites} alt="" />Favorites
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Cart} alt="" />Cart
                  </a>
                </li>
              </ul>
              <ul class="hidden-lg hidden-md">
                <li>
                  <a href="">
                    <img src={Account} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Favorites} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Cart} alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-12 hidden-sm hidden-md hidden-lg">
              <div class="search-area">
                <input type="text" placeholder="Search for products…" />
                <a href="">
                  <i class="fa fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Fragment>
);

export default Header;
