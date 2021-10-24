require('dotenv').config({
    path: '.env.local'
});

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

/**
 * Configuracion de los CORS
 */
const corsOptions = {
    origin: true
}

/**
 * Middlewares
 */
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
    limit: '10mb'
}));

/**
 * Configuracion del servidor
 */
const PORT = process.env.PORT || 3010;
const HOST = '0.0.0.0';

/**
 * Configuracion e importacion de Rutas
 */
// app.use(require('./routes/archivos'));

/**
 * Ejecucion del Servidor
 */
app.listen(PORT, HOST, () => {
    console.log(`Server in listen on port: ${PORT}`);
});

