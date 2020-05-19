'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodejs:server');

const port = normalizePort(process.env.port || '3011');


const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('api rodando na porta' + port);

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;
    debug('Listening on '+ bind);
}
function normalizePort(valor){
    const port = parseInt(valor,10);

    if(isNaN(port)){
        return valor;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

function onError(error){
    if(error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port == 'string' ?
    'Pipe' + port :
    'Port' + port;

    switch(error.code){
        case 'EACESS':
            console.error(bind + 'requires privelege');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
        default:
            throw error;
    }
}