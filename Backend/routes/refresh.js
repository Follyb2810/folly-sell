const express = require('express')
const router = express.Router()
const refresh = require('../middleware/refreshController')



router.route('/').get(refresh)

module.exports = router
// !
// const express = require('express');
// const router = express.Router();
// const { authUser } = require('../middleware/authUser'); // Import your authUser middleware
// const handleRefreshToken = require('../path-to-handleRefreshToken'); // Adjust the path

// // Define the route
// router.post('/refresh-token', authUser, handleRefreshToken);

// module.exports = router;
// Refresh the token 10 seconds before it expires
// const refreshAccessToken = async () => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const accessToken = userInfo.token;

//     try {
//         const response = await axios.post('http://localhost:4000/refresh-token', {}, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         });

//         const { data } = response;
//         localStorage.setItem('userInfo', JSON.stringify({ ...userInfo, token: data.accessToken }));
//     } catch (error) {
//         console.error('Token Refresh Error:', error);
//         // Handle token refresh error, e.g., log user out
//     }
// };

// Call the refresh function automatically 10 seconds before the token expires
// const scheduleTokenRefresh = () => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const tokenExpiration = jwt.decode(userInfo.token).exp * 1000; // Convert to milliseconds
//     const now = Date.now();
//     const timeUntilRefresh = tokenExpiration - now - 10000; // Refresh 10 seconds before expiry

//     setTimeout(() => {
//         refreshAccessToken();
//         scheduleTokenRefresh();
//     }, timeUntilRefresh);
// };

// Call this function once after the user logs in to schedule token refresh
scheduleTokenRefresh();

