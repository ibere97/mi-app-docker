const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hola desde Docker + Yarn + Render</h1>
        <p>Mi servicio web funciona correctamente.</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});