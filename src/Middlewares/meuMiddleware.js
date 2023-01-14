exports.middlewareGlobal = (req, res, next) => {
    if (req.body.nome && req.body.sobrenome) {
        console.log(`meu nome é ${req.body.nome} e meu sobrenome é ${req.body.sobrenome}`);
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('BAD CSRF RESPONSE.')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}