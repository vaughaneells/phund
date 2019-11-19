const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');
const path = require('path');
const plaid = require('./routes/api/plaid');
const { receivePublicToken, getTransactions } = require('./routes/api/plaid');

const app = express();

//Connect Database
connectDB();

//Initialize Express Middleware
app.use(cookieParser('thisisthesecret'));
app.use(express.json({ extended: false }));

//Serve static files
app.use(express.static('./client/dist'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/borrower', require('./routes/api/borrower'));

// Get the public token and exchange it for an access token
app.post('/public_token', receivePublicToken);

// Get Transactions
app.get('/transactions', getTransactions);

//Routes for React Router
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/dist/index.html'))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
