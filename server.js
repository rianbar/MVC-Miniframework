const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/Middlewares/meuMiddleware');

//libera acesso de métodos post
app.use(express.urlencoded({ extended: true }))

//setando arquivos estáticos!
app.use(express.static(path.resolve(__dirname, 'public')));

//setando caminho das views: existem maneiras mais fáceis de trablhar sem usar o path!
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//setando as rotas
app.use(routes);

//setando global middlewares!
app.use(meuMiddleware);

//setando o host!
app.listen(3000, () => {
    console.log('server na porta 3000 rodando');
})
