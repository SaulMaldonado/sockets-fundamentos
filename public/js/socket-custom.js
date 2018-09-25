var socket = io();

// escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
})

// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'saul',
    mensaje: 'holas'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('info de servido: ', mensaje);
});