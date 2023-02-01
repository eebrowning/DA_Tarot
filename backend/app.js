const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db');
const profileRouter = require('./routes/api/profiles-router');
const userRouter = require('./routes/api/users-router')
const passport = require('passport')

const app = express()
const apiPort = 8000

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!,Test')
// })

app.use('/api/profiles', profileRouter);

app.use('/api/users', userRouter);



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = app;
