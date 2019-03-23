const express = require('express');

const PORT = process.env.PORT || 8080;
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const BUGPATH = __dirname + '/bugs/';

app.get('/bug/:id', (req, res) => {
    res.sendFile(BUGPATH + req.params.id + '.html');
})

app.listen(PORT, () => {
    console.log("Server listening in port", PORT);
});