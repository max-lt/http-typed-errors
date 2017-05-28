/** @type Array */
const definitions = require('./definitions');
const makeTypedError = require('typed-error-factory');

// Handle 404
module.exports.handle404 = (req, res, next) => {
    next(new module.exports.NotFoundError);
};

// Handle 500
module.exports.handle500 = (error, req, res, next) => {

    if (error && error.statusCode && error.type) {
        error = {type: error.name, message: error.message, statusCode: error.statusCode};
    } else {
        console.error(error);
        error = {type: 'InternalServerError', message: 'Internal Server Error', statusCode: 500};
    }

    res.status(error.statusCode).json({error})
};

const errorMap = new Map();

definitions.forEach((e) => {
    let errorName = e.name.replace(/[ -]/g, '');
    if (!errorName.endsWith('Error')) errorName += 'Error';
    Object.defineProperty(module.exports, errorName, {
        enumerable: true,
        value: makeTypedError({
            name: errorName,
            message: e.name,
            statusCode: e.code
        })
    });
    errorMap.set(e.code, module.exports[errorName]);
});

module.exports.getError = (status) => errorMap.get(status);