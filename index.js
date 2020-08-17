let restify = require('restify');
const db = require('./db')

let server = restify.createServer();

server.use(restify.plugins.queryParser({}));
server.get('/users', db.getUsers);
server.get('/users/:id', db.getUserById);
server.post('/users', db.createUser);
server.put('/users/:id', db.updateUser);
server.del('/users/:id', db.deleteUser);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});