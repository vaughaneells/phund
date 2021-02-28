const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const http = require("http");
const path = require('path');
const socket = require('socket.io');
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socket(server);

io.on("connection", (socket) => {
  var response = 'Hello, welcome to Phund!';
  socket.emit('show', response);
  socket.on('data', (data) => {
    console.log(data);
  })
});

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
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));


