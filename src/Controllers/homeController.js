exports.paginaInicial = (req, res, next) => {
    res.render('index');
    next()
}

exports.respostaFormulario = (req, res, next) => {
    res.send(`O nome inserido foi ${req.body.nome}`)
    next()
}