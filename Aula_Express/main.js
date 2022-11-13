const path = require('path');
const express = require('express');
const app = express();

const basePath = path.join(__dirname, 'templates');
const usuario = require('./usuario');

app.use(express.static(__dirname + '/public'));

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.use(express.json());

app.use('/usuario', usuario);

const contato = require('./contato');
app.use('/contato', contato);

const inicio = require('./inicio');
app.use('/', inicio)


app.listen(3000, () => {
    console.log("Server iniciado...")
});


