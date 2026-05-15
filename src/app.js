const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor TecnoRepuestos funcionando');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});