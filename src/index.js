const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('Mongo Connect Your DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    try {
        console.log(`Server running port 3333.\nhttp://localhost:3333`)
    } catch (error) {
        console.log(error)
    }
});
    // Métodos HTTP: get, post, put, delete

    // Tipos de parâmetros: 
    // Query Params: request.query (Filtros, ordenação, paginação)
    // Route Params: request.params (Identificar um recurso na alteração ou remoção)
    // Body: request.body (Dados para criação ou alteração de um registro)

    // MongoDB (Não-relacional)
