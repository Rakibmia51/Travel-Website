const User = require('../models/User')

// create new User
const createUser = async(req, res)=>{
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(200).json({
            success: true,
            message: 'Successfully Created',
            data: savedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to Created, Try again',
        })
    }
}

//Update User
const updateUser = async (req, res) =>{
    const {id} = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            {$set: req.body},  
            { returnDocument: 'after' }
        )

        if (!updateUser) {
            return res.status(404).json({
                success: false,
                message: 'Tour not found',
            });
        }

         res.status(200).json({
            success: true,
            message: 'Successfully Updated',
            data: updatedUser
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: 'Failed to Updated, Try again',
        })
    }

}



//Delete User
const deleteUser = async (req, res) =>{
    const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
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

//Get Single User
const getSingleUser = async (req, res) =>{
    const { id } = req.params;

  try {
   
    const user = await User.findById(id)

    // যদি এই আইডি দিয়ে কোনো ট্যুর খুঁজে না পাওয়া যায়
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'User found successfully',
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tour, try again',
      error: error.message,
    });
  }
}

//Get All User
const getAllUser = async (req, res) =>{

  try {
    const users = await User.find({})
   
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all Users',
      data: users
    });

  } catch (error) {
     console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve Users, try again',
      error: error.message,
    });
  }

}


module.exports = {createUser, updateUser, deleteUser, getSingleUser, getAllUser}