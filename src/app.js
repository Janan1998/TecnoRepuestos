const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'Servidor funcionando'
    });
});

module.exports = app;

if (require.main === module) {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });
}