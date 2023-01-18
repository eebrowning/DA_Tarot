const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        // const errors = validationErrors
        //     .array()
        //     .map((error) => `${error.msg}`);
        // // const errors = validationErrors.errors;
        // // let err = new Error("validation errors")
        // let err = {}
        // err.data = errors
        // err.status = 400;
        // err.statusText = 'Validation errors.';

        // console.log(err, 'in handlevalidation')

        console.log(validationErrors.errors, '***in handle validations***')
        req.errors = validationErrors.errors;
        next()

    }
    else {
        next();
    }

};

module.exports = {
    handleValidationErrors
};
