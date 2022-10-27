var express = require("express");
const http = require('http');

var app = express();
const port = 3000;
let hostname = "localhost";

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello, express')
})

app.get("/user/:id", (req, res) => {
	res.send(`User id is ${req.params.id}`); // Or res.send('User id is ' + req.params.id);
});

app.post('/signup', (req, res) => {
    res.send
})

app.listen(port, () => {
    console.log(`App running at http://$localhost:${port}/`);
});

