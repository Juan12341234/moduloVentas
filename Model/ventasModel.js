const mongoose = require('mongoose');

const ventasShema = mongoose.Schema({
    id : {
        type : Number,
        required : true, 
    },
    agendamiento : {
        type : Number,
        required : true,
    },
    diagnostico : {
        type : String,
        require : true,
    },
    fecha : {
        type : String,
        require : true, 
    },
    hora : {
        type : String,
        require : true,
    },
    precio : {
        type : Number,
        require : true,
    },
    metodoPago : {
        type : String,
        require : true,
    }, 
});

const Ventas = mongoose.model('Ventas', ventasShema);

module.exports = Ventas;