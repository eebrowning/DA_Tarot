const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db');
const profileRouter = require('./routes/api/profiles-router');
const userRouter = require('./routes/api/users-router')

const passport = require('passport')
const imagesRouter = require('./routes/api/images-router')//AWS 


const app = express()
const apiPort = 8000

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.use('/api/profiles', profileRouter);

app.use('/api/users', userRouter);
app.use('/api/images', imagesRouter);




app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = app;
