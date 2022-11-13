const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, '../templates');
const prompt = require('prompt-sync');

router.post('/send', (req, res) => {
    console.log(req.body);
    res.sendFile(`${basePath}/agradecimento.html`)
});

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/contato.html`)
});

module.exports = router;