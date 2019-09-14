const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');

const app = express();

//Connect Database
connectDB();

//Initialize Express Middleware
app.use(cookieParser('thisisthesecret'));
app.use(express.json({ extended: false }));

//Serve static files
app.use(express.static('./client/dist'));

//Test Express server
app.get('/', (req, res) => res.send('API Running'));

//Authenticate user on demand
app.get('/api/auth', auth, (req, res) => res.send({auth: true}));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/borrower', require('./routes/api/borrower'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
