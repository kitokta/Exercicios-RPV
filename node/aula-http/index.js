const express = require ('express');
const app = express();
//const http = require ('http');

// const servidor = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type':'text/html'});
//     res.write('<h1>Hello world!!</h1>');
//     res.end();
// });


const db = [
    {'1':{'id': 1, 'nome': 'Gab', 'Idade': 26},
    '2': {'id': 2, 'nome': 'leticia', 'Idade': 18},
    '3': {'id': 3, 'nome': 'Gleidson', 'Idade': 21},
    '4': {'id': 4, 'nome': 'Vitor', 'Idade': 28}
}
]

app.get('/lista-nomes', (req, res) => {
    res.json(db);
})

app.listen(8000);


