const mongoose = require('mongoose');
const env = require('dotenv');


env.config();

const url = process.env.dbConfig;
const dbConfig = async () => {
    try {
        const dbCon = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to database at host: ${dbCon.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1); // Exiting with a non-zero code to indicate error
    }
};

module.exports = dbConfig;
