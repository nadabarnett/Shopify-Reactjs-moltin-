import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import HomeMainSection from './HomeMainSection';
import MobileNav from '../global/Mobile/MobileNav';
import Loading from '../global/Loading';

import { GetProducts } from '../../ducks/products';
import { GetCategories } from '../../ducks/categories';
import { GetCollections } from '../../ducks/collections';

import slider from './slider.png';
import Arrow_Slider_White_Left from './Arrow_Slider_White_Left.png';
import Arrow_Slider_White_Right from './Arrow_Slider_White_Right.png';

import Brand_1 from './Brand_1.png';
import Brand_2 from './Brand_2.png';
import Brand_3 from './Brand_3.png';
import Brand_4 from './Brand_4.png';

import Image_Product01 from './Image_Product01.png';
import Image_Product03 from './Image_Product03.png';
import Image_Product04 from './Image_Product04.png';
import Image_Product11 from './Image_Product11.png';
import Arrow_Link_Black_Right from './Arrow_Link_Black_Right.png';

import Image_Product from './Image_Product.png';
import Promotion_Banner from './Promotion_Banner.png';
import Icon_Promotion from './Icon_Promotion.png';
import Image_Product02 from './Image_Product02.png';
import bulk from './bulk.png';
import business from './business.png';

import Image_Category from './Image_Category.png';
import Image_Category_1 from './Image_Category-1.png';
import Image_Category_2 from './Image_Category-2.png';
import Image_Category_3 from './Image_Category-3.png';

import Icon_Mail from './Icon_Mail.png';
import Icon_SMS from './Icon_SMS.png';
import Icon_Shipping from './Icon_Shipping.png';
import Icon_New_Deals from './Icon_New_Deals.png';
import Icon_Returns from './Icon_Returns.png';

class Home extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }

    if (!categories.fetched) {
      this.props.GetCategories();
    }

    if (!collections.fetched) {
      this.props.GetCollections();
    }
  }

  render() {
    const { products, collections, categories } = this.props;

    return (
      <body>
        <div class="menu-bar hidden-xs">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ul>
                  <li>
                    <a href="#">Equestrian</a>
                  </li>
                  <li>
                    <a href="#">Agricultural Tools</a>
                  </li>
                  <li>
                    <a href="#">Hardware</a>
                  </li>
                  <li>
                    <a href="#">Dairy Hygiene</a>
                  </li>
                  <li>
                    <a href="#">Houseware</a>
                  </li>
                  <li class="hidden-sm">
                    <a href="#">Building Materials</a>
                  </li>
                  <li class="hidden-sm">
                    <a href="#">Plumbing</a>
                  </li>
                  <li>
                    <a href="#">More</a>
                  </li>
                  <li>
                    <a href="#">On Sale</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="menu">
          <div class="row">
            <div class="col-xs-12">
              <h3>
                <i class="fa fa-bars" /> Shop Now
              </h3>
            </div>
          </div>
        </div>

        <div class="banner-sec">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active" />
              <li data-target="#myCarousel" data-slide-to="1" />
              <li data-target="#myCarousel" data-slide-to="2" />
              <li data-target="#myCarousel" data-slide-to="3" />
              <li data-target="#myCarousel" data-slide-to="4" />
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <img src={slider} alt="Los Angeles" style={{ width: '100%' }} />
                <div class="carousel-caption">
                  <h3>SEPTEMBER 1st - October 30th</h3>
                  <h1>HARVEST SALE</h1>
                  <h2>50% on everything</h2>
                  <a href="">SHOP NOW</a>
                </div>
              </div>

              <div class="item">
                <img src={slider} alt="Los Angeles" style={{ width: '100%' }} />
                <div class="carousel-caption">
                  <h3>SEPTEMBER 1st - October 30th</h3>
                  <h1>HARVEST SALE</h1>
                  <h2>50% on everything</h2>
                  <a href="">SHOP NOW</a>
                </div>
              </div>

              <div class="item">
                <img src={slider} alt="Los Angeles" style={{ width: '100%' }} />
                <div class="carousel-caption">
                  <h3>SEPTEMBER 1st - October 30th</h3>
                  <h1>HARVEST SALE</h1>
                  <h2>50% on everything</h2>
                  <a href="">SHOP NOW</a>
                </div>
              </div>
              <div class="item">
                <img src={slider} alt="Los Angeles" style={{ width: '100%' }} />
                <div class="carousel-caption">
                  <h3>SEPTEMBER 1st - October 30th</h3>
                  <h1>HARVEST SALE</h1>
                  <h2>50% on everything</h2>
                  <a href="">SHOP NOW</a>
                </div>
              </div>

              <div class="item">
                <img src={slider} alt="Los Angeles" style={{ width: '100%' }} />
                <div class="carousel-caption">
                  <h3>SEPTEMBER 1st - October 30th</h3>
                  <h1>HARVEST SALE</h1>
                  <h2>50% on everything</h2>
                  <a href="">SHOP NOW</a>
                </div>
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev">
              <span>
                <img src={Arrow_Slider_White_Left} alt="" />
              </span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next">
              <span>
                <img src={Arrow_Slider_White_Right} alt="" />
              </span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="brand-sec dark-bg">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <div class="row">
                    <div class="col-xs-7">
                      <p>Popular Brands</p>
                    </div>
                    <div class="col-xs-5">
                      <div class="view-all">
                        <a href="">
                          <span>View all</span>
                          <img src={Arrow_Link_Black_Right} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-10 col-md-offset-1">
                <div class="brand-slider owl-carousel">
                  <div class="item">
                    <img src={Brand_1} alt="" />
                  </div>
                  <div class="item">
                    <img src={Brand_2} alt="" />
                  </div>
                  <div class="item">
                    <img src={Brand_3} alt="" />
                  </div>
                  <div class="item">
                    <img src={Brand_4} alt="" />
                  </div>
                  <div class="item">
                    <img src={Brand_1} alt="" />
                  </div>
                  <div class="item">
                    <img src={Brand_2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tools-sec">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <div class="row">
                    <div class="col-xs-7">
                      <p>Popular Brands</p>
                    </div>
                    <div class="col-xs-5">
                      <div class="view-all">
                        <a href="">
                          <span>View all</span>
                          <img src={Arrow_Link_Black_Right} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 col-sm-4 hidden-xs">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product01} alt="" />
                  </div>
                  <p>Brand Name</p>
                  <p>
                    <span>Tier Metal Deck Wagon</span>
                  </p>
                  <h3>
                    $138<span>88</span>
                  </h3>
                  <a href="" />
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product02} alt="" />
                  </div>
                  <p>Garant</p>
                  <p>
                    <span>Grain Scoop</span>
                  </p>
                  <h3>
                    $51<span>98</span>
                  </h3>
                  <a href="" />
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product03} alt="" />
                  </div>
                  <p>Brand Name</p>
                  <p>
                    <span>Implement Jack</span>
                  </p>
                  <h3>
                    $51<span>98</span>
                  </h3>
                  <a href="" />
                </div>
              </div>
              <div class="col-md-3 hidden-sm hidden-xs">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product04} alt="" />
                  </div>
                  <p>Nom de la marque</p>
                  <p>
                    <span>Snow Pusher, 24’’ UHMW</span>
                  </p>
                  <h3>
                    $24<span>99</span>
                  </h3>
                  <a href="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="image-banner-sec">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="image-banner-bg">
                  <img src={Promotion_Banner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="featured-sec">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <div class="row">
                    <div class="col-xs-7">
                      <p>Popular Brands</p>
                    </div>
                    <div class="col-xs-5">
                      <div class="view-all">
                        <a href="">
                          <span>View all</span>
                          <img src={Arrow_Link_Black_Right} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 col-sm-4">
                <div class="big-sec text-center">
                  <img src={Icon_Promotion} alt="Logo" />
                  <p>From October 1st to 30th</p>
                  <h2>BIG AUTUMN SALE</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                  <a href="">View all</a>
                </div>
              </div>
              <div class="col-md-3 hidden-sm hidden-xs">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product11} alt="" />
                  </div>
                  <p>Rubbermaid</p>
                  <p>
                    <span>Farm Wheelbarrow</span>
                  </p>
                  <h3>
                    $51<span>98</span>
                  </h3>
                  <h4>($359.99)</h4>
                  <a href="" />
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product11} alt="" />
                  </div>
                  <p>Heiniger</p>
                  <p>
                    <span>Xperience Heiniger clipper</span>
                  </p>
                  <h3>
                    $421<span>98</span>
                  </h3>
                  <h4>($521.98)</h4>
                  <a href="" />
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src={Image_Product11} alt="" />
                  </div>
                  <p>Suevia</p>
                  <p>
                    <span>Grain Scoop Suevia Blue 1Kg</span>
                  </p>
                  <h3>
                    $1<span>18</span>
                  </h3>
                  <h4>($6.18)</h4>
                  <a href="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="bulk-price">
                  <img src={bulk} alt="" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="businbess">
                  <img src={business} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="category-sec">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <div class="row">
                    <div class="col-xs-7">
                      <p>Popular Brands</p>
                    </div>
                    <div class="col-xs-5">
                      <div class="view-all">
                        <a href="">
                          <span>View all</span>
                          <img src={Arrow_Link_Black_Right} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 col-xs-4">
                <div class="single-categories dark-bg">
                  <img src={Image_Category_3} alt="" />
                  <h3>Agricultural Tools</h3>
                </div>
              </div>
              <div class="col-md-3 col-xs-4">
                <div class="single-categories dark-bg">
                  <img src={Image_Category_2} alt="" />
                  <h3>Equestrian Products</h3>
                </div>
              </div>
              <div class="col-md-3 col-xs-4">
                <div class="single-categories dark-bg">
                  <img src={Image_Category_1} alt="" />
                  <h3>Haymaking</h3>
                </div>
              </div>
              <div class="col-md-3 hidden-sm hidden-xs">
                <div class="single-categories dark-bg">
                  <img src={Image_Category} alt="" />
                  <h3>Agricultural Fences</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="subscribe-sec">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="single-subscribe">
                  <div class="subscribe-image">
                    <img src={Icon_Mail} alt="Icon" />
                  </div>
                  <div class="subscribe-text">
                    <p>Join our mailing list :</p>
                    <div class="subscribe-form">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                      />
                      <a href="#">SUBSCRIBE</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="single-subscribe">
                  <div class="subscribe-image">
                    <img src={Icon_SMS} alt="Icon" />
                  </div>
                  <div class="subscribe-text">
                    <p>Join to our sms list :</p>
                    <div class="subscribe-form">
                      <input type="text" required placeholder="Phone number" />
                      <a href="#">SUBSCRIBE</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="details-sec">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="dark-bg">
                  <div class="row">
                    <div class="col-sm-12 col-xs-4">
                      <img src={Icon_Shipping} alt="" />
                    </div>
                    <div class="col-sm-12 col-xs-8">
                      <h4>FREE Shipping over $75</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="dark-bg">
                  <div class="row">
                    <div class="col-sm-12 col-xs-4">
                      <img src={Icon_New_Deals} alt="" />
                    </div>
                    <div class="col-sm-12 col-xs-8">
                      <h4>New Deals Every Day</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="dark-bg">
                  <div class="row ">
                    <div class="col-sm-12 col-xs-4">
                      <img src={Icon_Returns} alt="" />
                    </div>
                    <div class="col-sm-12 col-xs-8">
                      <h4>FREE Returns for Store Credit</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

const mapStateToProps = ({ products, categories, collections }) => ({
  products,
  categories,
  collections
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCategories,
      GetCollections
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
