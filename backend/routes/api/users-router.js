
const express = require('express');
const UserCtrl = require('../../db/controllers/user-ctrl');
const passport = require('passport')
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router()

const validateUser = [//pass as middleware with the correct fields
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username(min 4 characters).'),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Enter a valid password, min 6 characters'),
    handleValidationErrors
];

// router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.json({ msg: 'Success' });
// })
router.get('/current', passport.authenticate('jwt', { session: false }), UserCtrl.currentUser)

router.post('/login', UserCtrl.loginUser)
router.post('/register', validateUser, UserCtrl.createUser)
router.get('/:id', UserCtrl.getUser);
router.get('/', UserCtrl.getAllUsers);
router.put('/:id', UserCtrl.updateUser)
router.delete("/:id", UserCtrl.deleteUserById)


module.exports = router
