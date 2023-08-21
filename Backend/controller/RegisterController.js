const registerSchemas = require('../models/RegisterSchema');
const bcrypt = require('bcrypt')
const env = require('dotenv')
const jwt = require('jsonwebtoken')

env.config()

const RegisterController = (req, res) => {
    res.send('hello');
};
const RegisterUser = async (req, res) => {
  try {
      const { first,last,gender, email, password, mobile } = req.body;

      if (!first ||!last || !gender || !email || !password || !mobile) {
          return res.status(400).json({ message: 'All inputs are required' });
      }
      if (!CheckmailValid(email)) {
          return res.status(400).json({ message: 'Enter Correct email address. eg; follyb@gmail.com ' });
      }

      try {
          const emailExists = await registerSchemas.findOne({ email });

          if (emailExists) {
              return res.status(400).json({ message: 'Email address already exists' });
          }
          const hashPassword = await bcrypt.hash(password, 10);

          const newUser = new registerSchemas({
              first,
              last,
              gender,
              email,
              password: hashPassword,
              mobile,
              isAdmin: false,
              refreshToken: null 
          });

          const savedUser = await newUser.save();

          const userCreated = {
              _id: savedUser._id,
              name: savedUser.name,
              email: savedUser.email,
              mobile: savedUser.mobile
          };

          res.status(201).json({ message: 'User registered successfully', user: userCreated });
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'An error occurred', error: error.message });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error Registering User', error: error.message });
  }
};

const CheckmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const userExist = await registerSchemas.findOne({ email });
      if (!userExist) {
        res.status(401).json({ message: 'User does not exist' });
      } else {
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (isPasswordValid) {
          const token = jwt.sign(
            { userid: userExist._id, isAdmin: userExist.isAdmin },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '6h' } 
          );
          
          const refreshToken = jwt.sign(
            { userid: userExist._id, isAdmin: userExist.isAdmin },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
          );
          
          
          userExist.refreshToken = refreshToken;
          await userExist.save();
          
          const user = {
            _id: userExist._id,
            email: userExist.email,
            token: token,
            refreshToken:refreshToken
          };
          res.cookie('jwt',refreshToken,{httpOnly:true,maxAge:24*60*60*1000})
          res.status(200).json({ message: 'User successfully logged in',user });
        } else {
          res.status(401).json({ message: 'Invalid password' }); 
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in', error: error.message }); 
    }
  };
  



module.exports = { RegisterController, RegisterUser ,userLogin};
