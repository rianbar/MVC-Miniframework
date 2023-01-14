require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, checkCsrfError } = require('./src/Middlewares/meuMiddleware');
const csrf = require('csurf');

//connection with data base
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('conectado com a base de dados.');
        app.emit('pronto');
    }).catch(e => {
        console.log(e);
    });

const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');

//added security tools
app.use(csrf());

//libera acesso de métodos post
app.use(express.urlencoded({ extended: true }))

//setando arquivos estáticos!
app.use(express.static(path.resolve(__dirname, 'public')));

//setando as sessões
const sessionOptions = session({
    secret: '...',
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());

//setando caminho das views: existem maneiras mais fáceis de trablhar sem usar o path!
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//setando as rotas
app.use(routes);

//setando global middlewares!
app.use(middlewareGlobal);
app.use(checkCsrfError);

//setando o host!
app.listen(3000, () => {
    console.log('server na porta 3000 rodando');
})
