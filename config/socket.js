module.exports = (app, server) => {

    const io = require('socket.io')(server);
    
    app.set('io', io);

    io.on('connection', (socket) => {
        console.log('Usuário conectou!');
    
        socket.on('disconnect', () => {
            console.log('Usuário desconectou!');
        });
    
        socket.on('enviarMsgServidor', (data) => {
       
            socket.emit('usuarioConectou', 
                        {
                            apelido: data.apelido,
                            mensagem: data.mensagem
                        }
            );
    
            socket.broadcast.emit('usuarioConectou', 
                        {
                            apelido: data.apelido,
                            mensagem: data.mensagem
                        }
            );
    
            socket.emit('participantes', 
                        {
                            apelido: data.apelido
                        }
            );
    
            socket.broadcast.emit('participantes', 
                        {
                            apelido: data.apelido
                        }
            );
    
        });
    
    });

}