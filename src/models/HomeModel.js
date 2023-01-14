const mongoose = require('mongoose');

const homeSquema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const homeModel = mongoose.model('Home', homeSquema);
