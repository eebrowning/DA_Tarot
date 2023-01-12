const Profile = require('../../models/profile');
const asyncHandler = require('express-async-handler');
// const { handleValidationErrors } = require('../../utils/validation')
// const { check } = require('express-validator');


// const validateProfile = [//pass as middleware with the correct fields
//     check('name')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 4 })
//         .withMessage('Please provide a name(min 4 characters).'),
//     check('birthdate')
//         .exists({ checkFalsy: true })
//         .isISO8601().toDate()
//         .withMessage('Please provide a date of birth.'),
//     check('location')
//         .isLength({ min: 4 })
//         .withMessage('Enter a valid location, min 4 characters'),
//     check('team')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 4 })
//         .withMessage('Enter a valid team name, min 4 characters'),
//     check('gender')
//         .exists({ checkFalsy: true })
//         .withMessage('Please select gender.'),
//     check('sports')
//         .exists({ checkFalsy: true })
//         .withMessage('Please select at least one sport.'),
//     check('about')
//         .isLength({ min: 10 })
//         .withMessage('About must be at least 10 characters long.'),
//     // check('interests')
//     // .exists({ checkFalsy: true })
//     // .isLength({ min: 10 })
//     // .withMessage('Interests must be at least 10 characters long.'),
//     check('avatar')
//         .isURL()
//         .withMessage('Please provide an image link(.png or .jpg)')
//         .custom(imageURL => {
//             if (imageURL.includes('.png') || imageURL.includes('.jpg')) {
//                 return true;
//             }
//             throw new Error('Please only use a link to a .jpg or .png')
//         }),
//     handleValidationErrors
// ];





///pad out requirements for user submission->back-end validation should be there.
createProfile = (req, res) => {

    console.log(req.errors, req.error)
    const body = req.body
    console.log(body, 'res data in create')
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a profile',
        })
    }
    console.log('xxxxxxx')
    console.log('xxxxxxx')

    console.log(body);
    console.log('xxxxxxx')
    const profile = new Profile(body)
    // console.log('xxxxxxx')
    // console.log('xxxxxxx')

    // console.log(profile);
    // console.log('xxxxxxx')
    if (!profile) {

        return res.status(400).json({ success: false, error: err })
    }


    profile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profile._id,
                data: profile,
                message: 'Profile created!',
            })
        })
        .catch(error => {


            return res.status(400).json({
                error,
                message: 'Profile not created!',
            })
        })
}

updateProfile = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Profile.findOne({ _id: req.params.id }, (err, profile) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'profile not found!',
            })
        }
        profile.name = body.name
        profile.time = body.time
        profile.rating = body.rating
        profile
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: profile._id,
                    message: 'Profile updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Profile not updated!',
                })
            })
    })
}


getProfileById = async (req, res) => {

    let profile = await Profile.findOne({ _id: req.params.id });

    try {
        res.status(200).json({
            success: true,
            data: profile
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}

deleteProfileById = async (req, res) => {

    let deleted = await Profile.findOneAndDelete({ _id: req.params.id })
    //     , function (err) {
    //     if (err) console.log(err);
    //     console.log("Successful deletion");
    // });
    try {
        res.status(200).json({
            success: true,
            data: deleted
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}


getProfiles = async (req, res) => {
    let profiles = await Profile.find({})

    try {
        res.status(200).json({
            success: true,
            data: {
                profiles
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}


module.exports = {
    createProfile,
    updateProfile,
    getProfiles,
    getProfileById,
    deleteProfileById
}
