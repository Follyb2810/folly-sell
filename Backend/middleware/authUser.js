const jwt = require('jsonwebtoken');
const env = require('dotenv');

env.config();

const authUser = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer ')) {
        try {
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.userId = decoded.userid;
            req.isAdmin = decoded.isAdmin === 'true'; // Parse isAdmin as boolean
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Invalid authorization token' });
        }
    } else {
        res.status(401).json({ message: 'No authorized token provided' });
    }
};

module.exports = authUser;
