const RegisterSchema = require('../models/RegisterSchema');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();


const handleRefreshToken = async (req, res) => {
  const refreshToken = req.cookies.jwt; // Get the refresh token from cookies

  if (!refreshToken) {
      return res.sendStatus(401);
  }

  try {
      const user = await RegisterSchema.findOne({ refreshToken });

      if (!user) {
          return res.sendStatus(403);
      }

      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

      if (decoded.userid === user._id.toString() && decoded.isAdmin === user.isAdmin) {
          const newAccessToken = jwt.sign({ userid: user._id, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
              expiresIn: '15m'
          });
          res.cookie('jwt', newAccessToken, { httpOnly: true }); // Set the new access token in cookies
          res.json({ accessToken: newAccessToken });
      } else {
          res.sendStatus(403);
      }
  } catch (error) {
      res.sendStatus(403);
  }
};

// const handleRefreshToken = (req, res) => {
//   const cookies = req.cookies;
//   if (!cookies?.jwt) return res.sendStatus(401);

//   const refreshToken = cookies.jwt;
//   const user = RegisterSchema.findOne({ refreshToken });

//   if (!user) return res.sendStatus(403);

//   try {
//     const decoded = jwt.verify(refreshToken,  process.env.ACCESS_TOKEN_SECRET,);

//     if (decoded.userId === user.userId && decoded.isAdmin === user.isAdmin) {
//       const accessToken = jwt.sign(refreshToken, process.env.REFRESH_TOKEN_SECRET, {
//         expiresIn: '30s'
//       });
//       req.userId = decoded.userId;
//       req.isAdmin = decoded.isAdmin === 'true';
//       res.json({ accessToken });
//     } else {
//       res.sendStatus(403);
//     }
//   } catch (error) {
//     res.sendStatus(403);
//   }
// };

module.exports = handleRefreshToken;


// !
// ...

// const handleRefreshToken = async (req, res) => {
//   const refreshToken = req.cookies.jwt; // Get the refresh token from cookies

//   if (!refreshToken) {
//       return res.sendStatus(401);
//   }

//   try {
//       const user = await RegisterSchema.findOne({ refreshToken });

//       if (!user) {
//           return res.sendStatus(403);
//       }

//       const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

//       if (decoded.userid === user._id.toString() && decoded.isAdmin === user.isAdmin) {
//           const newAccessToken = jwt.sign({ userid: user._id, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
//               expiresIn: '15m'
//           });
//           res.cookie('jwt', newAccessToken, { httpOnly: true }); // Set the new access token in cookies
//           res.json({ accessToken: newAccessToken });
//       } else {
//           res.sendStatus(403);
//       }
//   } catch (error) {
//       res.sendStatus(403);
//   }
// };

// module.exports = handleRefreshToken;
