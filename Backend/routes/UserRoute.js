const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const userController = new UserController();
const User = require('../models/UserModel');


// Import multer and configure storage
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to save the images
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    // Rename the file to avoid conflicts (you can use a unique ID)
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Route for handling user signup with image upload
router.post('/signup', upload.single('petImage'), userController.signup);

// User login route
router.post('/login', userController.login);

// Get all users route
router.get('/users', userController.getAllUsers);

// Update a user route
router.put('/users/:id', userController.updateUser);

// Get one user route
router.get('/users/:id', userController.getOneUser);

// Delete a user route
router.delete('/users/:id', userController.deleteUser);

// Route to get user by email
// Import necessary modules and User model

router.post('/users/details', async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If user found, return user details
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

