const express = require('express')
const { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } = require('../controllers/tourControllers')

const router = express.Router()

//Create new tour
router.post('/', createTour)

//Update new tour
router.put('/:id', updateTour)

//Delete new tour
router.delete('/:id', deleteTour)

//get single tour
router.get('/:id', getSingleTour)

//get all tour
router.get('/', getAllTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

//Get Featured tour
router.get('/search/getFeaturedTours', getFeaturedTour)

//Get tour Count
router.get('/search/getTourCount', getTourCount)


module.exports = router