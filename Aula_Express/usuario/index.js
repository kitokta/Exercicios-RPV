const path = require('path');
const express = require('express');
const router = express.Router()
const basePath = path.join(__dirname, '../templates');

router.post('/save', (req, res) => {
    console.log(req.body)
    res.sendFile(`${basePath}/contato.html`);
})

router.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

module.exports = router;