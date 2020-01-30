const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./auth/authRouter');
const userRouter = require('./users/userRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);

server.use('/api/users', userRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err.message
    })
})

module.exports = server;