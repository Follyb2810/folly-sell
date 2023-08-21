const RegisterSchema = require('../models/RegisterSchema');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const handleLogout = async (req, res) => {
    const refreshToken = req.cookies.jwt;
  
    if (!refreshToken) {
        return res.sendStatus(204);
    }
  
    try {
        const user = await RegisterSchema.findOne({ refreshToken });
  
        if (!user) {
            return res.sendStatus(204);
        }
  
        user.refreshToken = ''; // Clear the refresh token
        await user.save();
  
        res.clearCookie('jwt', { httpOnly: true }); // Clear the access token from cookies
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };
  
  // module.exports = handleLogout;
  

// const handleLogout = (req, res) => {
//   const cookies = req.cookies;
//   if (!cookies?.jwt) return res.sendStatus(204);

//   const refreshToken = cookies.jwt;
//   const user = RegisterSchema.findOne({ refreshToken });

//   if (!user) {
//     res.clearCookie('jwt', { httpOnly: true });
//     return res.sendStatus(204);
//   }

//   user.refreshToken = '';
//   res.clearCookie('jwt', { httpOnly: true }) //! secure:true
//   res.sendStatus(204)
// };

module.exports = handleLogout;


// ...

// ?
// const handleLogout = async (req, res) => {
//   const refreshToken = req.cookies.jwt;

//   if (!refreshToken) {
//       return res.sendStatus(204);
//   }

//   try {
//       const user = await RegisterSchema.findOne({ refreshToken });

//       if (!user) {
//           return res.sendStatus(204);
//       }

//       user.refreshToken = ''; // Clear the refresh token
//       await user.save();

//       res.clearCookie('jwt', { httpOnly: true }); // Clear the access token from cookies
//       res.sendStatus(204);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'An error occurred', error: error.message });
//   }
// };

// module.exports = handleLogout;

// !
// const handleLogout = async (req, res) => {
//   const refreshToken = req.cookies.jwt;

//   if (!refreshToken) {
//       return res.sendStatus(204);
//   }

//   try {
//       const user = await RegisterSchema.findOne({ refreshToken });

//       if (!user) {
//           return res.sendStatus(204);
//       }

//       user.refreshToken = ''; // Clear the refresh token
//       await user.save();

//       res.clearCookie('jwt', { httpOnly: true }); // Clear the access token from cookies
//       res.sendStatus(204);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'An error occurred', error: error.message });
//   }
// };

// module.exports = handleLogout;
