const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db');
const profileRouter = require('./routes/api/profiles-router');
const userRouter = require('./routes/api/users-router')

const passport = require('passport')
const imagesRouter = require('./routes/api/images-router')//AWS 

/////////AWS////////

// const fileUpload = require("express-fileupload");
// const {
//     S3Client,
//     PutObjectCommand
// } = require("@aws-sdk/client-s3");

// const s3Config = {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: "us-east-1",
// };

// const s3Client = new S3Client(s3Config);
//////////////////

const app = express()
const apiPort = 8000

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
// app.use(fileUpload());//AWS
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!,Test')
// })

app.use('/api/profiles', profileRouter);

app.use('/api/users', userRouter);
app.use('/api/images', imagesRouter);




app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

module.exports = app;
