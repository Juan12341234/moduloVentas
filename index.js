const express = require("express");

const app = express();

const Ventas = [
    {
        id: 1,
        agendamiento: 'Consulta general',
        diagnostico: 'Resfriado común',
        fecha: '2024-04-05',
        hora: '10:00',
        precio: 50,
        metodoPago: 'Tarjeta de crédito'
    },
    {
        id: 2,
        agendamiento: 'Control pediátrico',
        diagnostico: 'Estado de salud óptimo',
        fecha: '2024-04-10',
        hora: '15:30',
        precio: 80,
        metodoPago: 'Efectivo'
    },
    {
        id: 3,
        agendamiento: 'Cirugía menor',
        diagnostico: 'Extracción de uña encarnada',
        fecha: '2024-04-15',
        hora: '08:00',
        precio: 120,
        metodoPago: 'Transferencia bancaria'
    },
];


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