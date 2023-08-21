const registerSchemas = require('../models/RegisterSchema');
const bcrypt = require('bcrypt');

const createAdminUser = async () => {
    const existingAdmin = await registerSchemas.findOne({ isAdmin: true });

    if (!existingAdmin) {
        const defaultAdmin = {
            name: 'folly sell',
            email: 'follysell@gmail.com',
            password: 'follysell',
            mobile: 1234567890,
            isAdmin: true,
        };

        const hashPassword = await bcrypt.hash(defaultAdmin.password, 10);

        const newUser = new registerSchemas({
            ...defaultAdmin,
            password: hashPassword,
        });

        await newUser.save();
        console.log('Admin user created successfully.');
    } else {
        console.log('Admin user already exists.');
    }
};

const AdminController = async (req, res, next) => {
    try {
        await createAdminUser();

        req.isAdmin = true;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating admin user' });
    }
};

module.exports = AdminController;


// AdminController middleware (AdminController.js)
// const registerSchemas = require('../models/RegisterSchema');

// const AdminController = async (req, res, next) => {
//     try {
//         const existingAdmin = await registerSchemas.findOne({ isAdmin: true });

//         if (!existingAdmin) {
//             const newUser = new registerSchemas({
//                 name: 'follysell',
//                 email: 'follysell@gmail.com',
//                 password: 'follysell',
//                 mobile: 1234567890,
//                 isAdmin: true,
//             });

//             await newUser.save();
//             console.log('Admin user created successfully.');
//         } else {
//             console.log('Admin user already exists.');
//         }

//         req.isAdmin = !!existingAdmin; // Set isAdmin property on the request object

//         next();
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Error creating admin user' });
//     }
// };

// module.exports = AdminController;
// const registerSchemas = require('../models/RegisterSchema');
// const bcrypt = require('bcrypt');

// const AdminController = async (req, res, next) => {
//     try {
//         const existingAdmin = await registerSchemas.findOne({ isAdmin: true });

//         if (!existingAdmin) {
//             const defaultAdmin = {
//                 name: 'folly sell',
//                 email: 'follysell@gmail.com',
//                 password: 'follysell',
//                 mobile: 1234567890,
//                 isAdmin: true,
//             };

//             const hashPassword = await bcrypt.hash(defaultAdmin.password, 10);

//             const newUser = new registerSchemas({
//                 ...defaultAdmin,
//                 password: hashPassword,
//             });

//             await newUser.save();
//             console.log('Admin user created successfully.');
//         } else {
//             console.log('Admin user already exists.');
//         }

//         req.isAdmin = !!existingAdmin;

//         next();
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Error creating admin user' });
//     }
// };

// module.exports = AdminController;
