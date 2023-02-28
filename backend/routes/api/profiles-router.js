const express = require('express')
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const ProfileCtrl = require('../controllers/profile-ctrl');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router()

const validateProfile = [//pass as middleware with the correct fields
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a name(min 4 characters).'),
    check('birthdate')
        .exists({ checkFalsy: true })
        .isISO8601().toDate()
        .withMessage('Please provide a date of birth.'),
    check('location')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Enter a valid location, min 4 characters'),
    check('team')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Enter a valid team name, min 4 characters'),
    check('gender')
        .exists({ checkFalsy: true })
        .withMessage('Please select gender.'),
    check('sports')
        .exists({ checkFalsy: true })
        .withMessage('Please select at least one sport.'),
    check('about')
        .exists({ checkFalsy: true })
        .isLength({ min: 10 })
        .withMessage('About must be at least 10 characters long.'),
    // check('interests')
    //     .exists({ checkFalsy: true })
    //     .isLength({ min: 10 })
    //     .withMessage('Interests must be at least 10 characters long.'),
    // check('avatar')
    //     .isURL()
    //     .withMessage('Please provide an image link(.png or .jpg)')
    //     .custom(imageURL => {
    //         if (imageURL.includes('.png') || imageURL.includes('.jpg')) {
    //             return true;
    //         }
    //         throw new Error('Please only use a link to a .jpg or .png')
    //     }),
    handleValidationErrors
];


router.post('/', validateProfile, ProfileCtrl.createProfile)
// router.post('/', ProfileCtrl.createProfile)


router.put('/:id', validateProfile, ProfileCtrl.updateProfile)
router.get('/:id', ProfileCtrl.getProfileById)
router.get('/', ProfileCtrl.getProfiles)
router.delete('/:id', ProfileCtrl.deleteProfileById)

module.exports = router
