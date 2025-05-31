function logRequest(log = console.log) {
    return (req, _res, next,) => {
        log({
            method: req.method,
            url: req.url,
            headers: req.headers,
        });

        next();
    };
}

module.exports = logRequest;