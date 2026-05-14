import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
  
  const SliderComponent = Slider.default || Slider;

    const settings ={
        dots: true,
        infinity: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinity: true,
                    dots: true,
                }
            },
             {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }

        ]
    }
  return (
    <SliderComponent {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vel quam voluptatum expedita debitis consectetur ad qui 
          officia amet dolorum nisi possimus, blanditiis esse culpa, 
          dolor, delectus cumque temporibus modi iste!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vel quam voluptatum expedita debitis consectetur ad qui 
          officia amet dolorum nisi possimus, blanditiis esse culpa, 
          dolor, delectus cumque temporibus modi iste!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lina mana</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vel quam voluptatum expedita debitis consectetur ad qui 
          officia amet dolorum nisi possimus, blanditiis esse culpa, 
          dolor, delectus cumque temporibus modi iste!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Kabir Bala</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vel quam voluptatum expedita debitis consectetur ad qui 
          officia amet dolorum nisi possimus, blanditiis esse culpa, 
          dolor, delectus cumque temporibus modi iste!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Kabir Bala</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
    </SliderComponent>
  )
}

export default Testimonial
