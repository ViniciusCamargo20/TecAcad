const mongoose = require("mongoose");

const mensalidade = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "O campo Data é obrigatório"]
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    price: {
        type: Number,
        require: [true, "Campo Valor é obrigatório"],
        min: [0, "Valor mínimo da mensalidade é de 0 reais"]
    },

    payed: {
        type: Boolean,
        default: false
    },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mensalidade', mensalidade);