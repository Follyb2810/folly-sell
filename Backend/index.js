require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConfig = require('./config/db');
const PORT = process.env.PORT || 4000;
const path = require('path');
const cookieParser = require('cookie-parser');

dbConfig();
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({ limit: '50mb' }));

app.use(cors());
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/', require('./routes/registerRoute'));
app.use('/refresh',require('./middleware/refreshController'))
// app.use('/logout', require('./routes/logoutRoutes'));
app.use('/', require('./routes/blogRoutes'));

app.listen(PORT, () => console.log(`Folly is starting on port ${PORT}`));