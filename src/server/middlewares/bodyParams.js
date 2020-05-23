const bodyParams = params => {
    return function(req, res, next) {
        params.forEach(param => {
            if(!req[param]) {
                return res.status(400).send(`Body param ${param} is required`);
            }
        })
        next();
    }
}

module.exports = bodyParams;
