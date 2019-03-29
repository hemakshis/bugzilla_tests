const express = require('express');
const bodyParser = require('body-parser');
const webSocketServer = require('ws').Server;

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static('bugs'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/bug/quotedtext', (req, res) => {
    res.sendFile(__dirname + '/bugs/quotedtext.html');
});

app.get('/html.txt', (req, res) => {
    res.send("\"new text\"");
});

app.get('/plain.txt', (req, res) => {
    res.sendFile(__dirname + '/plain.txt');
});

app.get('/bug/:id', (req, res) => {
    res.sendFile(__dirname + '/bugs/' + req.params.id + '.html');
})

app.post('/bug/1284488', (req, res) => {
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
