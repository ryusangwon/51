var express = require('express');
const http = require('http');
const path = require('path');
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '0000',
//     database: '51-mysql'
// })

// connection.connect();
// connection.query('SELECT * from ')

var app = express();
const port = 3000;
// let hostname = "localhost";

// app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/header.html'))
})

app.get("/user/:id", (req, res) => {
	res.send(`User id is ${req.params.id}`); // Or res.send('User id is ' + req.params.id);
});

app.post('/signup', (req, res) => {
    res.send

    
})

app.listen(app.get('port'), () => {
    console.log(`App running at http://$localhost:${port}/`);
});
