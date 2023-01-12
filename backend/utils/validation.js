const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);


    if (!validationErrors.isEmpty()) {
        // const errors = validationErrors
        //     .array()
        //     .map((error) => `${error.msg}`);
        const errors = validationErrors.errors;
        const msgs = [];

        errors.forEach(error => {
            msgs.push(error['msg'])
        });

        // console.log(msgs)
        // _res.errors = errors;
        let err = new Error(msgs)

        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';

        ///this seems to be on the right track, as i can see my errors in Axios errors' response.data
        next(err);

    }
    next();
};

module.exports = {
    handleValidationErrors
};
