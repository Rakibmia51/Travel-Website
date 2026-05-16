import React, { useState } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'


const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01', // later it will be dynamic
        userEmail: 'example@gamil.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })


    const handleChange = (e) =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value }))
    }

    // send data to the server
    const handeClick = (e)=>{
        e.preventDefault()

        console.log(credentials);
        navigate("/thank-you")
    }

    const serviceFee = 10
    const totaAmount = Number(price)* Number(credentials.guestSize) + Number(serviceFee)

  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>
                ${price}<span>/per person</span>
            </h3>
            <span className='tour_rating d-flex align-items-center'>
                <i className='ri-star-fill'></i> 
                {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        {/* ================ booking form start ================= */}
        <div className="booking__form">
            <h5>Information</h5>
            <form onSubmit={handeClick} className='booking__info-form'>
                <FormGroup>
                    <input 
                        type="text" 
                        placeholder='Full Name' 
                        id='fullName' 
                        required 
                        onChange={handleChange} />
                </FormGroup>
                 <FormGroup>
                    <input 
                        type="number" 
                        placeholder='Phone' 
                        id='phone' 
                        required 
                        onChange={handleChange} />
                </FormGroup>
                 <FormGroup className='d-flex align-items-center gap-3'>
                    <input 
                        type="date" 
                        placeholder='' 
                        id='bookAt' 
                        required 
                        onChange={handleChange} />

                    <input 
                        type="number" 
                        placeholder='Guest' 
                        id='guestSize' 
                        required 
                        onChange={handleChange} />
                </FormGroup>
            </form>
        </div>
        {/* ================ booking form end ================= */}

        {/* ================ booking Buttom start ================= */}
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>
                        ${price} <i className='ri-close-line'></i> {credentials.guestSize} person
                    </h5>
                    <span>${price*credentials.guestSize}</span>
                </ListGroupItem>

                <ListGroupItem className='border-0 px-0'>
                    <h5>Service charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>

                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totaAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={handeClick}>
                Book Now
            </Button>
        </div>
        {/* ================ booking Buttom end ================= */}
    </div>
  )
}

export default Booking