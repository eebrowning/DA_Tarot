// const bcrypt = require('bcryptjs');
// const User = require('../../models/user')
// const jwt = require('jsonwebtoken');
const express = require('express');
const UserCtrl = require('../../db/controllers/user-ctrl');

const router = express.Router()

router.post('/login', UserCtrl.loginUser)
router.post('/register', UserCtrl.createUser)
router.get('/:id', UserCtrl.getUser);
router.get('/', UserCtrl.getAllUsers);
router.put('/:id', UserCtrl.updateUser)
router.delete("/:id", UserCtrl.deleteUserById)


module.exports = router
