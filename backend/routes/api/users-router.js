// const bcrypt = require('bcryptjs');
// const User = require('../../models/user')
// const jwt = require('jsonwebtoken');
const express = require('express');
const UserCtrl = require('../../db/controllers/user-ctrl');
const passport = require('passport')

const router = express.Router()


// router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.json({ msg: 'Success' });
// })
router.get('/current', passport.authenticate('jwt', { session: false }), UserCtrl.currentUser)

router.post('/login', UserCtrl.loginUser)
router.post('/register', UserCtrl.createUser)
router.get('/:id', UserCtrl.getUser);
router.get('/', UserCtrl.getAllUsers);
router.put('/:id', UserCtrl.updateUser)
router.delete("/:id", UserCtrl.deleteUserById)


module.exports = router
