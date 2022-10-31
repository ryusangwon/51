const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
const app = express();
const port = 3000;
let hostname = "localhost";

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

sequelize.sync({force: false}).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} no router.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err: {};
    res.status(err.status || 500);
    res.render('error');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/header.html'))
});

app.get("/user/:id", (req, res) => {
	res.send(`User id is ${req.params.id}`); // Or res.send('User id is ' + req.params.id);
});

app.post('/signup', (req, res) => {
    res.send
})

app.listen(app.get('port'), () => {
    console.log(`App running at http://$localhost:${port}/`);
});

