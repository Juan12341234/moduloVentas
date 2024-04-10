const express = require('express');
const app = express();

// Obtener la variable de entorno
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

// Conexion a la base de datos
const mongoose = require('mongoose');
mongoose.connect(process.env.DBConnection)
.then(() => {
    console.log('Conexión exitosa');
})
.catch(err => console.error(`Error de conexión: ${err}`));


app.use(express.json());

// Rutas requeridas
const ventasRoutes = require('./Routes/ventasRoutes');

// Rutas usuadas
app.use(ventasRoutes);

app.use('/', (req, res) => {
    res.send("Bienvenido a la api de ventas Amor&Glamour");
});

// Puerto Utilizado
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Conectado al puerto ${port}`);
});