const express = require('express');
const AdminController = require('../controller/AdminController');
const { RegisterController, RegisterUser, userLogin } = require('../controller/RegisterController');
const router = express.Router();
const authUser = require('../middleware/authUser');

// User registration and login routes
router.route('/register')
    .post(RegisterUser);

router.route('/login')
    .post(userLogin);

// Admin creation route
router.route('/create-admin')
    .post(AdminController);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { RegisterUser, userLogin } = require('../controller/RegisterController'); // Import the necessary functions

// // ...

// // Modify the POST route to use RegisterUser function
// router.route('/register').post(RegisterUser);

// // Modify the POST route to use userLogin function
// router.route('/login').post(userLogin);

// module.exports = router;



// const express = require('express')
// const Admin =require('../controller/AdminController')
// const {RegisterController, RegisterUser, userLogin} = require('../controller/RegisterController')
// const router = express.Router()
// const authUser = require('../middleware/authUser');


// router.route('/')
//          .get(RegisterController)
//          .post(RegisterUser)
//          .post(Admin)
         


// router.route('/login').post(userLogin)


// module.exports = router