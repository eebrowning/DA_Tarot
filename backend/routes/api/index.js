const router = require('express').Router();

const profileRouter = require('./profiles-router')
const userRouter = require('./users-router');
const imagesRouter = require('./images-router')//AWS 


// router.use('/users', userRouter);
// router.use('/profiles', profileRouter);
// router.use('/images', imagesRouter)


module.exports = router;
