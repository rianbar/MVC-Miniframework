module.exports = (req, res, next) => {
    if (req.body.nome && req.body.sobrenome) {
        console.log(`meu nome é ${req.body.nome} e meu sobrenome é ${req.body.sobrenome}`);
    }
    next();
}
