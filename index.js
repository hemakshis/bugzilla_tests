const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.use(bodyParser.json({limit: '10mb'}));

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

app.post('/bug/1284488', (req, res) => {
    const data = {
        a: ['1', '2', '3'],
        b: [],
        c: {apple: 1, oranges: 2, d: {}},
        e: {}
    };
    res.json(data);
});

app.post('/bug/1542172', (req, res) => {
    console.log(JSON.stringify(req.body).length/1024);
    res.json(req.body);
})

app.listen(PORT, () => {
    console.log("Server listening in port", PORT);
});
