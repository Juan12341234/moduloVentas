const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Ventas = require('./Model/ventasModel');
const User = require('./Model/userModel');

app.use("/login", function (req, res) {
    return res.json(User);
});

app.use("/ventas/:id", function (req, res) {
    const {id} = req.params;
    const venta = Ventas.find(function(venta){
        return venta.id == id;
    })
    if(!venta){
        return res.status(400).json({mensaje: "Error: Venta no existe"});
    }
    return res.json(venta);
});

app.use("/ventas", function (req, res) {
    return res.json(Ventas);
});

app.listen(process.env.PORT ?? 8000, function () {
    console.log("Conectado");
});