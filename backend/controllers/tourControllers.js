const Tour = require('../models/Tour')


// create new tour
const createTour = async(req, res)=>{
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()
        res.status(200).json({
            success: true,
            message: 'Successfully Created',
            data: savedTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to Created, Try again',
        })
    }
}

//Update tour
const updateTour = async (req, res) =>{
    const {id} = req.params;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(
            id, 
            {$set: req.body},  
            { returnDocument: 'after' }
        )

        if (!updatedTour) {
            return res.status(404).json({
                success: false,
                message: 'Tour not found',
            });
        }

         res.status(200).json({
            success: true,
            message: 'Successfully Updated',
            data: updatedTour
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: 'Failed to Updated, Try again',
        })
    }

}

//Delete tour
const deleteTour = async (req, res) =>{
    const { id } = req.params;

  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete, try again',
      error: error.message,
    });
  }

}

//Get Single tour
const getSingleTour = async (req, res) =>{
    const { id } = req.params;

  try {
    // findById দিয়ে ট্যুর খোঁজা হচ্ছে 
    const tour = await Tour.findById(id)

    // যদি এই আইডি দিয়ে কোনো ট্যুর খুঁজে না পাওয়া যায়
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tour found successfully',
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tour, try again',
      error: error.message,
    });
  }
}

//Get All tour
const getAllTour = async (req, res) =>{

     // ফ্রন্টএন্ড থেকে পেজ নাম্বার নেওয়া হচ্ছে (যেমন: /tours?page=0), কিছু না পাঠালে ডিফল্ট ০ নম্বর পেজ
  const page = parseInt(req.query.page) || 0;
  const limit = 8; // প্রতি পেজে কয়টি করে ট্যুর দেখাতে চান

  try {
    const tours = await Tour.find({})
    .skip(page * limit)   // আগের পেজের ডাটাগুলো বাদ দেওয়া হচ্ছে
    .limit(limit);       // নির্দিষ্ট সংখ্যার ডাটা নেওয়া হচ্ছে


    // ডাটাবেজে মোট কয়টি ট্যুর আছে তা গণনা করা (ফ্রন্টএন্ডে পেজ সংখ্যা দেখানোর জন্য)
    const totalTours = await Tour.countDocuments({});
   
    res.status(200).json({
      success: true,
      count: tours.length,
      totalTours,
      message: 'Successfully retrieved all tours',
      data: tours,
    });
  } catch (error) {
     console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tours, try again',
      error: error.message,
    });
  }

}

// get tour by search
const getTourBySearch = async (req, res) =>{
     // ফ্রন্টএন্ড থেকে কোয়েরি প্যারামিটার আকারে ডাটা নেওয়া হচ্ছে (যেমন: /search?city=dhaka&distance=200&maxGroupSize=5)
  // 'i' মানে হলো case-insensitive (ছোট বা বড় হাতের অক্ষর কোনো সমস্যা করবে না)
  const city = new RegExp(req.query.city, 'i'); 
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // ডাটাবেজে ফিল্টার অনুযায়ী কোয়েরি করা হচ্ছে
    // $gte মানে Greater Than or Equal (কমপক্ষে এতজন মেম্বার সাইজ থাকতে হবে)
    // $lte মানে Less Than or Equal (দূরত্ব সর্বোচ্চ এত কিলোমিটার হতে পারবে)
    const tours = await Tour.find({
      city: city,
      distance: { $lte: distance },
      maxGroupSize: { $gte: maxGroupSize }
    })

    res.status(200).json({
      success: true,
      message: 'Successfully found matching tours',
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    console.error("Search Error:", error); // ব্যাকএন্ড টার্মিনালে এরর দেখার জন্য
    res.status(500).json({
      success: false,
      message: 'Internal server error during search',
      error: error.message,
    });
  }
}


//Get Featured tour
const getFeaturedTour = async (req, res) =>{

  const limit = 8; // প্রতি পেজে কয়টি করে ট্যুর দেখাতে চান

  try {
    const tours = await Tour.find({featured: true})
    .limit(limit);       // নির্দিষ্ট সংখ্যার ডাটা নেওয়া হচ্ছে
   
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all tours',
      data: tours,
    });
  } catch (error) {
     console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tours, try again',
      error: error.message,
    });
  }

}

// get tour counts
const getTourCount = async(req, res) =>{
    try {
       const tourCount =  await Tour.estimatedDocumentCount();
        res.status(200).json({
            success: true,
            data: tourCount,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to  Fetch, try again',
            error: error.message,
        });
    }
}


module.exports = {createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount}