const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const message_router = require('./routers/message_router');

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use('/message', message_router);

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'You have connected'
    });
});

server.use('/', (err, req, res, next) => {
   res.status(500).json({
       error_message: `Error: ${err}`
   });
   next()
});

server.listen(PORT, () => {
   console.log(`--- server running ---`);
});