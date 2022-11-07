const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const session = require('express-session');
const { sequelize } = require('./models');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true,
});

sequelize.sync({force: false}).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // json parsing
app.use(express.urlencoded({ extended: true})); // form parsing

app.use('/', indexRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    req.session.id = 'id';
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use((req, res, next) => {
    res.send('404!');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.send('error in server!');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'running');
});

