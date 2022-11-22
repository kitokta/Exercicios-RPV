const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mysql = require("mysql");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
//css
app.use(express.static('./public'));

//Middlewares para receber dados do form
app.use(
    express.urlencoded({extended: true})
)
app.use(express.json());

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM USUARIO';
    db.query(sql, (err, usuarios) => {
        if(err) throw err;
        res.render('usuarios', {usuarios});
    })

});

app.post('/usuario/save', (req, res) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const nascimento = req.body.dataNasc;
    const email = req.body.email;

    const sql = `INSERT INTO USUARIO (nome_usuario, endereco_usuario, email_usuario, data_nascimento_usuario) VALUES ('${nome}', '${endereco}', '${email}', '${nascimento}')`;

    db.query(sql, (err) => {
        if (err) throw err;
        res.render('cadastro_sucesso');
    })
})

app.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM CLIENTE';
    db.query(sql, (err, clientes) => {
        if(err) throw err;
        res.render('clientes', {clientes});
    })
})

//cadastrar um cliente
app.post('/cliente/save', (req, res) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const nascimento = req.body.dataNasc;
    const email = req.body.email;
    const dependentes = req.body.dependentes;

    const sql = `INSERT INTO CLIENTE (nome_cliente, endereco_cliente, email_cliente, data_nascimento_cliente, dependentes_cliente) VALUES ('${nome}', '${endereco}', '${email}', '${nascimento}', ${dependentes})`;

    db.query(sql, (err) => {
        if(err) throw err;
        res.redirect('/clientes');
    })
})

//exibir detalhes de um cliente
app.get('/cliente/delete/:id', (req, res) =>{
    const id = req.params.id;
    
    const sql = `DELETE FROM CLIENTE
                WHERE id_cliente = ${id}`;
    
    db.query(sql, (erro) => {
        if(erro){
            console.log(erro);
            return;
        }
        res.redirect('/clientes');
    })
});

app.get('/cliente/:id', (req, res) =>{
    const id = req.params.id;
    
    const sql = `SELECT * FROM CLIENTE
                WHERE id_cliente = ${id}`;
    
    db.query(sql, (erro, resultado) => {
        if(erro){
            console.log(erro);
            return;
        }
        const cliente = resultado[0];
        res.render('cliente', {cliente});
    })
});

//ir para tela de edicao de um cliente
app.get('/cliente/edit/:id', (req, res) =>{
    const id = req.params.id;
    
    const sql = `select id_cliente, 
                        nome_cliente, 
                        endereco_cliente, 
                        email_cliente, 
                        data_nascimento_cliente,
                        dependentes_cliente 
                    from CLIENTE
                    where id_cliente = ${id}`;
    
    db.query(sql, (erro, result) => {
        if(erro){
            console.log(erro);
            return;
        }
        const cliente = result[0];
        res.render('cliente-edit', {cliente});
    })

});

app.post('/cliente/update/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const nascimento = req.body.dataNasc;
    const email = req.body.email;
    const dependentes = req.body.dependentes;

    const sql = `UPDATE CLIENTE
                 SET
                 nome_cliente = '${nome}',
                 endereco_cliente = '${endereco}',
                 data_nascimento_cliente = '${nascimento}',
                 email_cliente = '${email}',
                 dependentes_cliente = ${dependentes}
                 WHERE
                 id_cliente = ${id}`;
    
    db.query(sql, (err) => {
        if (err) throw err;
        res.redirect('/clientes')
    })
})

app.get('/', (req, res) => {
    res.render('home');
})

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_test",
});

// Connect
db.connect((err) => {
  if (err) throw err;
  console.log("Conectou ao banco de dados crud_test");
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...")
  });
});


// CREATE TABLE CLIENTE ( id_cliente INT NOT NULL AUTO_INCREMENT, nome_cliente VARCHAR(200) NOT NULL, endereco_cliente VARCHAR(300) NOT NULL, email_cliente VARCHAR(150) NULL, data_nascimento_cliente VARCHAR(45) NOT NULL, dependentes_cliente INT NULL, PRIMARY KEY (id_cliente) );