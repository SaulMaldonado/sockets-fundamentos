const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido youkoso'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (message.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!!!!!'
        //     });
        // }
    })
})