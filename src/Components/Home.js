import React from "react";

import Carousel from "react-bootstrap/Carousel";
import LogoOne from "../Photos/market1.jpg";
import logoTwo from "../Photos/market2.png";
import s1 from "../Photos/pizza.jpg";
import s2 from "../Photos/pepsi.jpg";
import s3 from "../Photos/shetos.jpg";
import s4 from "../Photos/tost.jpg";

import t5 from "../Photos/market3.jpg";
import t6 from "../Photos/market4.jpg";

import "../Style/Home.css";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="fullBage">
      {/* ---------------------------Carousel---------------------------------------------------- */}
      <Carousel className="carosal-container">
        <Carousel.Item className="carosal">
          <span className="darkBG"></span>
          <img className="d-block w-100" src={LogoOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="carosal">
          <span className="darkBG"></span>
          <img
            className="carusal-logo-two d-block w-100"
            src={logoTwo}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* ---------------------------Scond - Group---------------------------------------------------- */}

      <div className="superMarket-p">
        <span className="color-red">supermarket</span>, large retail store
        operated on a self-service basis, selling groceries, fresh produce,
        meat, bakery and dairy products, and sometimes an assortment of nonfood
        goods. Supermarkets gained acceptance in the United States during the
        1930s. The early stores were usually located in reconverted industrial
        buildings in outlying areas; they had no elaborate display facilities,
        and their primary advantage was their low prices. During the 1940s and
        ’50s, they became the major food-marketing channel in the United States,
        and in the 1950s they spread through much of Europe. The extent to which
        they have succeeded in various countries has depended on{" "}
        <span className="color-red">
          {" "}
          the ability or willingness of producers
        </span>{" "}
        and wholesalers to adapt their operations to large-scale retailing. The
        spread of supermarkets has been part of a trend in the developed
        countries toward reducing costs and simplifying the pattern of
        marketing.
      </div>
      <div className=" ScondGroup container ">
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s1} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Pizza</Card.Title>
            <Card.Text className=" ScondGroupText">10 Items </Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s2} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Pepsi</Card.Title>
            <Card.Text className=" ScondGroupText">8 Items </Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s3} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Shetos</Card.Title>
            <Card.Text className=" ScondGroupText">6 Items</Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s4} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Tost</Card.Title>
            <Card.Text className=" ScondGroupText">9 Items </Card.Text>
          </Card.Body>
        </div>
      </div>

      <div className="superMarket-p">
        Fruits and vegetables{" "}
        <span className="color-red">
          contain important vitamins, minerals and plant chemicals.
        </span>{" "}
        They also contain fibre. There are many varieties of fruit and
        vegetables available and many ways to prepare, cook and serve them. A
        diet high in fruit and vegetables can help protect you against cancer,
        diabetes and heart disease
      </div>

      <div className=" ScondGroup2  ">
        <div className=" ScondGroup-card-2">
          <Card.Img className=" ScondGroupImg2" variant="top" src={t5} />
          <Card.Body className="ScondGroup-CardBody2 ">
            <Card.Title className=" ScondGroupTitle">vegetables</Card.Title>
            <Card.Text className=" ScondGroupText">Items 20</Card.Text>
          </Card.Body>
        </div>
        <div className=" ScondGroup-card-2">
          <Card.Img className=" ScondGroupImg2" variant="top" src={t6} />
          <Card.Body className="ScondGroup-CardBody2 ">
            <Card.Title className=" ScondGroupTitle">fruits</Card.Title>
            <Card.Text className=" ScondGroupText">Items 35</Card.Text>
          </Card.Body>
        </div>
      </div>

      <div>
        <div className="advertise ">
          <div className="Hurry ">Hurry, Quantities Limited! </div>

          <div className="win-cont">
            <div className="win"> WIN 250 EGP </div>
            <div className="orders">
              ON ALL ORDERS <br /> OVER 800 EGP
            </div>
          </div>

          <div className="Shop-cont">
            <div className="ad-shopNow"> Shop Now</div>
            <div className="online"> Online Only </div>
          </div>
        </div>
      </div>

      {/* ---------------------------forth-group---------------------------------------------------- */}
      <div className="forth-group container ">
        <div className="forth-group-ist-img ">
          <div className="forth-group-text1">MERRY</div>
          <h1 className="forth-group-ist-img-text1">
            CHRISTMAS <span className="four">40% </span> OFF{" "}
          </h1>
          <Button variant="outline-success" className=" forth-group-shop-now1 ">
            <Link className="forth-group-shop-now-link1 " to="/Shop">
              Shop Now
            </Link>
          </Button>
        </div>

        <div className="forth-group-scond-img">
          <div className="forth-group-text2">
            Your <br /> Next
          </div>
          <h1 className="forth-group-ist-img-text2">
            Purchase <br /> 10 % OFF{" "}
          </h1>
          <Button className="forth-group-shop-now2">
            <Link className="forth-group-shop-now-link2 " to="/Shop">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>

      <div to="/Shop">
        <div className="join-conT">
          <h3 className="join">JOIN US TO GET 20% OFF ON YOUR FIRTS ORDER </h3>
        </div>
      </div>

      {/* ---------------------------fifth-group---------------------------------------------------- */}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-nav-title-cont">
            <div className="footer-nav-title nav-title navbar-brand" href="#">
              Supermarkets{" "}
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                supermarket, large retail store operated on a self-service
                basis, selling groceries, fresh produce, meat, bakery and dairy
                products, and sometimes an assortment of nonfood goods.
                Supermarkets gained acceptance in the United States during the
                1930s. The early stores were usually located in reconverted
                industrial buildings in outlying areas; they had no elaborate
                display facilities, and their primary advantage was their low
                prices. During the 1940s and ’50s, they became the major
                food-marketing channel in the United States, and in the 1950s
                they spread through much of Europe.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <div>Fruits</div>
                </li>
                <li>
                  <div>vegetables</div>
                </li>
                <li>
                  <div>Fresh food</div>
                </li>
                <li>
                  <div>Juise</div>
                </li>
                <li>
                  <div>Top Sells</div>
                </li>
                <li>
                  <div>Pleats</div>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <div>About Us</div>
                </li>
                <li>
                  <div>Contact Us</div>
                </li>
                <li>
                  <div>Contribute</div>
                </li>
                <li>
                  <div>Privacy Policy</div>
                </li>
                <li>
                  <div>Sitemap</div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container w-100 ">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2023 Nast. All rights reserved. Use of this
                site constitutes acceptance of our User Agreement and Privacy
                Policy and Cookie Statement and Your California Privacy Rights.
                WoW may earn a portion of sales from products that are purchased
                through our site as part of our Affiliate Partnerships with
                retailers. The material on this site may not be reproduced,
                distributed, transmitted, cached or otherwise used, except with
                the prior written permission of Condé Nast
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
