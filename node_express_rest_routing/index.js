const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./dishRouter');
const promoRouter = require('./promoRouter');
const leaderRouter = require('./leaderRouter.js');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

