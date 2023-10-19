const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Baca file HTML
    fs.readFile('indexx.html', (err, data) => {
        if (err) {
            // Tangani kesalahan jika file tidak dapat dibaca
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            // Kirim file HTML sebagai respons
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
});
