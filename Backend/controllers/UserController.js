const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const User = require('../models/UserModel');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to save the images
    cb(null, '../public/uploads');
  },
  filename: function (req, file, cb) {
    // Rename the file to avoid conflicts (you can use a unique ID)
    cb(null, Date.now() + '-' + file.originalname);
  }
});


// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

class UserController {
  async signup(req, res) {
    try {
      const { fullName, email, contact, nic, password, petName, breed, gender, age } = req.body;
      let petImage;
  
      // Check if a file was uploaded
      if (req.file) {
        petImage = req.file.filename;
      }
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        // If the user already exists and a file was uploaded, delete the uploaded image
        // if (petImage) {
        //   fs.unlinkSync(path.join(__dirname,  'uploads', petImage));
        // }
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        fullName,
        email,
        contact,
        nic,
        password: hashedPassword,
        petName,
        petImage,
        breed,
        gender,
        age
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
  
      // Map over the users array and add the image URL to each user object
      const usersWithImageURL = users.map(user => {
        // Assuming that the petImage field contains the filename of the image
        // Construct the full URL or file path for each user's image
        user.petImageURL = `http://localhost:3000/uploads/${user.petImage}`; // Adjust the URL as needed
        return user;
      });
  
      res.status(200).json(usersWithImageURL);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const updateData = req.body;

      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOneUser(req, res) {
    try {
      const userId = req.params.id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;

      await User.findByIdAndDelete(userId);

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserByEmail(req, res) {
    try {
      const { email } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

}

module.exports = UserController;
