const express = require('express');
const bodyParser = require('body-parser');
const webSocketServer = require('ws').Server;

const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/bugs/quotedtext', (req, res) => {
    res.sendFile(__dirname + '/bugs/quotedtext.html');
});

app.get('/htmlresp', (req, res) => {
    res.send("\"new text\"");
});

app.get('/plain.txt', (req, res) => {
    res.sendFile(__dirname + '/plain.txt');
});

app.get('/bugs/:id', (req, res) => {
    res.sendFile(__dirname + '/bugs/' + req.params.id + '.html');
})

app.post('/bugs/1284488', (req, res) => {
    const data = {
        a: ['1', '2', '3'],
        b: [],
        c: {apple: 1, oranges: 2, d: {}},
        e: {}
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log("Server listening in port", PORT);
});
