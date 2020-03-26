const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

//Connect Database
connectDB();

//Initialize Express Middleware
app.use(cookieParser());
app.use(express.json({ extended: false }));

//Serve static files
app.use(express.static('./client/dist'));

//Define Routes
app.use('/api/register', require('./server/routes/api/register'));
app.use('/api/login', require('./server/routes/api/login'));
app.use('/api/borrower', require('./server/routes/api/borrower'));
app.use('/api/user', require('./server/routes/api/user'));

//Routes for React Router
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/dist/index.html'))
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
