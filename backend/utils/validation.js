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

        msgs.forEach(msg => {
            let err = new Error(msg)

            err.status = 400;
            err.title = 'Bad request.';

            next(err);
        })
        // let err = new Error(msgs)

        // err.errors = errors;
        // err.status = 400;
        // err.title = 'Bad request.';

        // next(err);

    }
    next();
};

module.exports = {
    handleValidationErrors
};
