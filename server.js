const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('PlataformaProyectos'));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
