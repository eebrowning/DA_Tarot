const User = require('../../models/user');
const bcrypt = require('bcryptjs');


createUser = (req, res) => {

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })

            }
        })
}

getUser = async (req, res) => {

    let user = await User.findOne({ _id: req.params.id })
    // console.log(user, 'users in getuser')

    try {
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}

getAllUsers = async (req, res) => {

    let users = await User.find({});

    try {
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }
}



updateUser = async (req, res) => {
    //need to figure out how to check unique email here....
    // User.findOne({ email: req.body.email })
    //     .then(user => {
    //         if (user) {
    //             // Throw a 400 error if the email address already exists
    //             return res.status(400).json({ email: "A user has already registered with this address" })
    //         }
    //         // else {
    //     });

    let body = req.body;
    // console.log(req.params, 'user id')
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'user not found!',
            })
        }
        user.username = body.username
        user.email = body.email
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err;
                user.password = hash;
                user.save()
                    // .then(user => res.json(user))
                    .catch(err => console.log(err));
            })
        })
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })

}



deleteUserById = async (req, res) => {

    let deleted = await User.findOneAndDelete({ _id: req.params.id })

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


module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUserById
}
