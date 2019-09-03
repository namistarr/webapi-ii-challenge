const express = require('express');
const server = express();
const postRoutes = require('./BlogPosts/router.js');
server.use(express.json());
server.use('/api/posts', postRoutes);


//Test
server.get('/', (req, res) => {
    res.status(200).json({
        message:"Server is running"
    });
});

module.exports = server;
