const express = require('express');
const path = require('path');
const http = require('http');
const sockets = require('./socket');
const app = express();
const server = http.createServer(app);
sockets(server);

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));
server.listen(port, () => console.log(`Server run at http://localhost:${port}`));
