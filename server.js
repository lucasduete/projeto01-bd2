let http = require('http');
let api = require('./server/config/express.js');

let port = parseInt(process.env.PORT, 10) || 3000;

api.set('port', port);

let server = http.createServer(api);
server.listen(port, () => console.log("servidor rodando na porta " + port));
