// delete this and ill hunt you down ;)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const formRoutes = require('./routes/form');
const hackerRouter = require('./routes/hacker');
const hackerApplicationRouter = require('./routes/hackerApplication');
const hackerAccountRouter = require('./routes/hackerAccount'); 
const loginRouter = require('./routes/login'); 
const registerRouter = require('./routes/register'); 
const userPage = require('./routes/userPage'); 
const app = express();

// Middleware S2
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api/hacker', hackerRouter);
app.use('/api/hackerApplication', hackerApplicationRouter);
app.use('/api/hackerAccount', hackerAccountRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/api/user', userPage);
// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));