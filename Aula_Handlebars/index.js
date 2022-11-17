const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const basePath = path.join(__dirname, 'routes');

app.engine('handlebars', exphbs.engine());
//metodo set(nome, valor);
app.set('view engine', 'handlebars');

//ler arquivos estaticos, como css
app.use(express.static(path.join(__dirname, '/public')));

const index = require(`${basePath}/index.js`);
app.use('/', index)

const produtos = require(`${basePath}/produtos.js`)
app.use('/produtos', produtos);

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000...");
})





    
  

