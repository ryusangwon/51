const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');

const { sequelize } = require('./models');
const passportConfig = require('./passport');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const gameRouter = require('./routes/game');
const mentoRouter = require('./routes/mento');
const lectureRouter = require('./routes/lecture');
const lectureRoomRouter = require('./routes/lecture_room');

//주석
dotenv.config();
const app = express();
passportConfig();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // json parsing
app.use(express.urlencoded({ extended: true })); // form parsing
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/game', gameRouter);
app.use('/mento', mentoRouter);
app.use('/lecture', lectureRouter);
app.use('/lectureRoom', lectureRoomRouter);

app.get('/', (req, res) => {
  // req.session.id = 'id';
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
