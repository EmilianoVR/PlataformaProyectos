const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('Paquetes'));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
