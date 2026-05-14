import React from 'react'
import'../styles/home.css'

import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVido from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import NewsLetter from '../shared/NewsLetter'




const Home = () => {
  return <>
      {/* =============== Hero Section Start================ */}
      <section>
        <Container>
            <Row>
                <Col lg='6'>
                  <div className='hero__content'>
                      <div className="hero__subtilte d-flex align-items-center">
                        <Subtitle subtitle={'Know Before You Go'}/>
                        <img src={worldImg} alt="" />
                      </div>
                      <h1>Traveling opens the door to creating {" "} <span 
                          className='highlight'>memories</span>
                      </h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ut culpa facere deleniti repellat distinctio excepturi 
                        laudantium sint, cumque, voluptatum quo nobis. Deleniti, 
                        quibusdam? Impedit eveniet aliquam doloremque, eos exercitationem id!
                      </p>
                  </div>
                </Col>

                <Col lg='2'>
                  <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                  </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box mt-4">
                    <video src={heroVido} alt="" controls />
                  </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="" />
                  </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
      </section>
      {/* =============== Hero Section End================ */}

      {/* =============== services Section Start================ */}
      <section>
         <Container>
            <Row>
                <Col lg='3'>
                  <h5 className='services__subtitle'>What we serve</h5>
                  <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
         </Container>
      </section>
      {/* =============== services Section End================ */}

      {/* =============== Featuered tour section start================ */}
      <section>
         <Container>
             <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'Explore'}/>
                <h2 className='featured__tour-title'>Our Featured tours</h2>
              </Col>
              <FeaturedTourList/>
          </Row>
         </Container>
      </section>
      {/* =============== Featuered tour section End================ */}


      {/* =============== Experience section Start =================== */}
      <section>
        <Container>
            <Row>
                <Col lg='6'>
                  <div className="experience__content">
                    <Subtitle subtitle={'Experience'}/>

                    <h2>With our all experience <br /> we will serve you</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                      Quia eligendi, commodi ex fugiat optio aspernatur quis quas? Nostrum, sunt odit dolor, corporis aut iure ducimus cum, voluptates tenetur cupiditate voluptate?
                    </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                      <span>12k</span>
                      <h6>Successful trip</h6>
                    </div>
                    <div className="counter__box">
                      <span>2k</span>
                      <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                      <span>15</span>
                      <h6>Years experience</h6>
                    </div>

                  </div>
                </Col>
                <Col lg='6'>
                  <div className="experience__img">
                      <img src={experienceImg} alt="experienceImg" />
                  </div>
                </Col>
            </Row>
        </Container>
      </section>
      {/* =============== Experience section End =================== */}

      {/* =============== Gallery section Start ====================*/}
      <section>
        <Container>
            <Row>
                <Col lg='12'>
                   <Subtitle subtitle={'Gallery'}/>
                    <h2 className='gallery__title'>
                      Visit our customer tour gallery amar
                    </h2>
                </Col>
                <Col lg='12'>
                 <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
      </section>
      {/* =============== Gallery section End ====================*/}

      {/* =============== Testimonial section start ====================*/}
      <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className='testimonial__title'>
                      Hat our fans say about us
                    </h2>
                </Col>
                <Col lg='12'>
                  <Testimonial/>
                </Col>
            </Row>
        </Container>
      </section>
      {/* =============== Testimonial section End ====================*/}

      {/* =============== NewsLetter section start ====================*/}
      <NewsLetter/>
      {/* =============== NewsLetter section End ====================*/}


  </>
}

export default Home