http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Neslon',
            edad: 56,
            url: req.url
        }
        res.write(JSON.stringify(salida))
        res.end();


        //res.write('hola mundo');
    })
    .listen(3000);

console.log('escuchando puerto 8080');