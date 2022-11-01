import React from "react";
import Carousel from "react-bootstrap/Carousel";
import LogoOne from "../Photos/logoOne.png";
import logoTwo from "../Photos/logoTwo.png";
import s1 from "../Photos/s1.jpg";
import s2 from "../Photos/s2.jpg";
import s3 from "../Photos/s3.jpg";
import s4 from "../Photos/s4.jpg";
import t1 from "../Photos/t1.jpg";
import t2 from "../Photos/t2.jpg";
import t3 from "../Photos/t3.jpg";
import t4 from "../Photos/t4.jpg";
import t5 from "../Photos/boot1";
import t6 from "../Photos/banse.jpg";
import fifth1 from "../Photos/fifth1.jpg";
import fifth2 from "../Photos/fifth2.jpg";
import fifth3 from "../Photos/fifth3.jpg";
import fifth4 from "../Photos/fifth4.jpg";
import fifth5 from "../Photos/fifth5.jpg";
import fifth6 from "../Photos/fifth6.jpg";
import "../Style/Home.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Home = (props) => {
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
          <img className="d-block w-100" src={logoTwo} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      {/* ---------------------------Scond - Group---------------------------------------------------- */}
      <CardGroup className=" ScondGroup container ">
        <Card className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s1} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Clothing</Card.Title>
            <Card.Text className=" ScondGroupText">Items 5</Card.Text>
          </Card.Body>
        </Card>
        <Card className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s2} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Bag Brand</Card.Title>
            <Card.Text className=" ScondGroupText">Items 20</Card.Text>
          </Card.Body>
        </Card>
        <Card className=" ScondGroup-card">
          <Card.Img className=" ScondGroupImg" variant="top" src={s3} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Accessories</Card.Title>
            <Card.Text className=" ScondGroupText">Items 6</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup className=" ScondGroup container ">
        <Card className=" ScondGroup-card-2">
          <Card.Img className=" ScondGroupImg" variant="top" src={t5} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Boots</Card.Title>
            <Card.Text className=" ScondGroupText">Items 20</Card.Text>
          </Card.Body>
        </Card>
        <Card className=" ScondGroup-card-2">
          <Card.Img className=" ScondGroupImg" variant="top" src={t6} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Classic</Card.Title>
            <Card.Text className=" ScondGroupText">Items 35</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* <div className="container shoe ">
        <Card className="shoe-Card">
          <Card.Img className="container shoeIMG" variant="top" src={s4} />
          <Card.Body className="ScondGroup-CardBody ">
            <Card.Title className=" ScondGroupTitle">Shoes</Card.Title>
            <Card.Text className=" ScondGroupText">Items 8</Card.Text>
          </Card.Body>
        </Card>
      </div> */}

      <h1 className="container Best">Best Selling</h1>

      {/* ---------------------------thirdGroup---------------------------------------------------- */}

      <div className="container thirdGroup">
        <Card className="thirdGroupCarD">
          <Card.Img variant="top" src={t1} />

          <Card.Body className="thirdGroup-Cardbody">
            <Card.Text className="thirdGroupCarDText">
              Quilted Gilet With Hood
            </Card.Text>
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCardDollar">150.00 $</Card.Text>
              <Button className="shop-now ">
                <Link className="shop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="thirdGroupCarD">
          <Card.Img variant="top" src={t2} />

          <Card.Body className="thirdGroup-Cardbody">
            <Card.Text className="thirdGroupCarDText">
              Quilted Gilet With Hood
            </Card.Text>
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCardDollar">110.00 $</Card.Text>
              <Button variant="outline-success" className="shop-now ">
                <Link className="shop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="thirdGroupCarD">
          <Card.Img variant="top" src={t3} />
          <Card.Body className="thirdGroup-Cardbody">
            <Card.Text className="thirdGroupCarDText">
              Quilted Gilet With Hood
            </Card.Text>
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCardDollar">280.00 $</Card.Text>

              <Button variant="outline-success" className="shop-now ">
                <Link className="shop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="thirdGroupCarD">
          <Card.Img variant="top" src={t4} />
          <Card.Body className="thirdGroup-Cardbody">
            <Card.Text className="thirdGroupCarDText">
              Quilted Gilet With Hood
            </Card.Text>
            <div className="thirdGroupCarDBtn">
              <Card.Text className="thirdGroupCardDollar">210.00 $</Card.Text>

              <Button variant="outline-success" className="shop-now ">
                <Link className="shop-now-link " to="/Shop">
                  Shop Now
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* ---------------------------forth-group---------------------------------------------------- */}

      <div className="forth-group container ">
        <div className="forth-group-ist-img ">
          <div className="forth-group-text1">MERRY</div>
          <h1 className="forth-group-ist-img-text1">Chrictmas 40 % Off </h1>
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
            Purchase <br /> 10 % Off{" "}
          </h1>
          <Button className="forth-group-shop-now2">
            <Link className="forth-group-shop-now-link2 " to="/Shop">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>

      {/* ---------------------------fifth-group---------------------------------------------------- */}

      <Container className="fifth-group">
        <div className="fifth-group-row">
          <div md={3}>
            <div className="fifth-group-body">
              <Card.Img className="fifth-group-img" src={fifth1} />
              <Card.Img className="fifth-group-img" src={fifth2} />
            </div>
          </div>
          <div className="fifth-group-col2">
            <h1 className="fifth-group-vintage1">Vintage Style</h1>
          </div>
        </div>
        <div className="fifth-group-row">
          <div md={3}>
            <div className="fifth-group-body">
              <Card.Img className="fifth-group-img" src={fifth3} />
              <Card.Img className="fifth-group-img" src={fifth4} />
            </div>
          </div>
          <div className="fifth-group-col2">
            <div className="fifth-group-vintage2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              nulla quis diam venenatis mattis at sed lacus. Fusce cursus
              volutpat ante. In imperdiet commodo nisl, quis hendrerit nibh
              ornare vitae. Mauris neque nunc, elementum eget ullamcorper
              efficitur, congue et massa. Suspendisse potenti. Donec semper
              mattis nibh, nec tempor justo varius sit amet. Cras vitae arcu
              quis nisi tempus varius. Integer et risus non turpis finibus
              laoreet facilisis eu massa.
            </div>
          </div>
        </div>
        <div className="fifth-group-row">
          <div md={3}>
            <div className="fifth-group-body">
              <Card.Img className="fifth-group-img" src={fifth5} />
              <Card.Img className="fifth-group-img" src={fifth6} />
            </div>
          </div>
          <div className="fifth-group-col2">
            <h1 className="fifth-group-vintage1">#LusionTheme</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
