const router = require('express').Router();

const profileRouter = require('./profiles-router')
const userRouter = require('./users-router');



router.use('/users', userRouter);
router.use('/profiles', profileRouter);



module.exports = router;
