const path = require('path');
const express = require('express');
const router = express.Router()
const basePath = path.join(__dirname, '../templates');

router.get('/contato', (req, res) => {
    res.sendFile(`${basePath}/contato.html`);
})

router.get('/cadastro', (req,res) => {
    res.sendFile(`${basePath}/cadastro.html`);
});

module.exports = router;