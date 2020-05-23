const config = require('config');
const app = require('./app');
const http = require('http'); 
const socketIO = require('socket.io');

const PORT = config.get('port');
const ADDRESS = config.get('address');

const server = http.Server(app);
const io = socketIO(server);


server.listen(PORT, () => console.log(`Server started on ${ADDRESS}:${PORT}`));
