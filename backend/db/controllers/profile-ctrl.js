const Profile = require('../../models/profile')
///pad out requirements for user submission->back-end validation should be there.
createProfile = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a profile',
        })
    }

    const profile = new Profile(body)

    if (!profile) {
        return res.status(400).json({ success: false, error: err })
    }

    profile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profile._id,
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
    await Profile.findOne({ _id: req.params.id }, (err, profile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!profile) {
            return res
                .status(404)
                .json({ success: false, error: `Profile not found` })
        }
        return res.status(200).json({ success: true, data: profile })
    }).catch(err => console.log(err))
}


getProfiles = async (req, res) => {
    let profiles = await Profile.find({})
    // console.log(profiles, 'res')

    // return res.status(200).json({ success: true, data: profiles })
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
}
