//external modules
const express = require('express');

//Core modules
const path = require('path');

//Local modules
const rootDir = require('./Utils/pathUtil');
const router = require('./routers/router');

const server = express();

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(express.static(path.join(rootDir, 'public')));

server.use(express.urlencoded());
server.use(router);

const port = 3000;
server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});