import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const QUICK_LINKS = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' }
]

const QUICK_LINKS2 = [
  { path: '/gallery', display: 'Gallery' },
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo and Social Media Column */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <div className="logo">
              <img src={logo} alt="Company logo" />
              <p className="mt-3 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, odit!
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span><Link to="#"><i className="ri-youtube-line"></i></Link></span>
                <span><Link to="#"><i className="ri-github-fill"></i></Link></span>
                <span><Link to="#"><i className="ri-facebook-circle-line"></i></Link></span>
                <span><Link to="#"><i className="ri-instagram-line"></i></Link></span>
              </div>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col lg="3" >
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {
                QUICK_LINKS.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0 ">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Quick Links Column (Rendered Missing Array) */}
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links p-0 border-0">
              {
                QUICK_LINKS2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Information Column */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links p-0 border-0">
              <ListGroupItem className="ps-0 border-0 bg-transparent d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2 text-dark">
                  <span><i className="ri-map-pin-line"></i></span> Address:
                </h6>
                <p className="mb-0 text-muted">Dhaka, Bangladesh</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 bg-transparent d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2 text-dark">
                  <span><i className="ri-mail-line"></i></span> Email:
                </h6>
                <p className="mb-0 text-muted">example@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 bg-transparent d-flex align-items-center gap-2">
                <h6 className="mb-0 d-flex align-items-center gap-2 text-dark">
                  <span><i className="ri-phone-fill"></i></span> Phone:
                </h6>
                <p className="mb-0 text-muted">+880185-974-0867</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Copyright Row */}
          <Col lg="12" className="text-center pt-4 mt-4 border-top">
            <p className="copyright text-muted mb-0">
              Copyright {currentYear}, Design & Developed by NextBarta-Rakib. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
