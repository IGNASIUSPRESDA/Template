const express = require('express');
const app = express();

// Menentukan folder yang berisi file HTML
const htmlFolder = __dirname;

app.get('/', (req, res) => {
    // Mengirimkan file HTML sebagai respons
    res.sendFile(`${htmlFolder}/indexx.html`);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
});
