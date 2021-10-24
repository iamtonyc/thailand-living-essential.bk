import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUS";
import KrafBangnaTrafficTime from "./Components/Map/KrafBangnaTrafficTime";
import BangnaMap from "./Components/Map/BangnaMap";
import Living from "./Components/Living/LivingEssential";
import LivingEssential from "./Components/Living/LivingEssential";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home" >
                  Thailand Living Essential
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Map" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/karfBangnaTrafficTime">
                        Kraf Bangna Traffic Time
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/BangnaMap">
                        Bangna Map
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="https://www.bts.co.th/eng/routemap.html"
                        target="_blank"
                      >
                        BTS
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="https://metro.bemplc.co.th/MRT-System-Map?lang=en"
                        target="_blank"
                      >
                        MRT
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="https://www.srtet.co.th/index.php/en/component/main/main?layout=cityline_calculate&meun=146&page=185"
                        target="_blank"
                      >
                        Airport Rail Link
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="https://mapcarta.com/W234375367"
                        target="_blank"
                      >
                        Parking 1
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="https://thailand-parking.com/"
                        target="_blank"
                      >
                        Parking 2
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="https://www.tomtom.com/en_gb/traffic-index/bangkok-traffic/"
                        target="_blank"
                      >
                        Bangkok Traffic Status
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Living" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/LivingEssential">
                        Living Essential
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="https://www.qppstudio.net/publicholidays2021/thailand.htm"
                        target="_blank"
                      >
                        Holiday
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Translate" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        href="https://translate.yandex.com/ocr"
                        target="_blank"
                      >
                        Yandex
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="https://translate.google.com/?hl=zh-TW&sl=th&tl=zh-TW&op=translate"
                        target="_blank"
                      >
                        Google Translate
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Shopping" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        href="https://www.lazada.co.th/#hp-most-popular"
                        target="_blank"
                      >
                        Lazada
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="https://shopee.co.th/"
                        target="_blank"
                      >
                        Shoee Thailand
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
                    {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about-us">
                  <AboutUs />
                </Route>
                <Route path="/contact-us">
                  <ContactUs />
                </Route>
                <Route path="/karfBangnaTrafficTime">
                  <KrafBangnaTrafficTime />
                </Route>
                <Route path="/BangnaMap">
                  <BangnaMap />
                </Route>
                <Route path="/LivingEssential">
                  <LivingEssential />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
export default BootstrapNavbar;
