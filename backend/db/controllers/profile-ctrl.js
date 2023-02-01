const Profile = require('../../models/profile');
const asyncHandler = require('express-async-handler');


//should I just manually put validations here?????


///pad out requirements for user submission->back-end validation should be there.
createProfile = (req, res) => {
    const body = req.body

    // console.log(req.errors, 'req data in create')
    // console.log("xxxxxxxxxx")
    // console.log("xxxxxxxxxx")
    if (req.errors) {
        return res.status(400).json({
            success: false,
            "errors": req.errors
        })
    }


    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a profile',
        })
    }

    const profile = new Profile(body)

    if (!profile) {
        // console.log('no profile, xxxxx')
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
}

//TODO
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
        //TODO update values, 2/1/2023
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
    // console.log('xxxxxxxx')
    // console.log(profiles, 'in main index.js in API')
    // console.log('xxxxxxxx')

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
