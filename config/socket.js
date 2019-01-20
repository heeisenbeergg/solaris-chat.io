module.exports = (app, server) => {

    const io = require('socket.io')(server);
    
    app.set('io', io);

    io.on('connection', socket => {
        console.log('User connected!');
    
        socket.on('disconnect', () => {
            console.log('User disconnected!');
        });

        socket.on('join', data => {
            socket.join(data.channel);
        });
    
        socket.on('sendMsgServer', data => {
    
            socket.broadcast.to(data.channel).emit('userConnected', 
                        {
                            name: data.name,
                            message: data.message
                        }
            );
    
            socket.emit('participants', 
                        {
                            name: data.name
                        }
            );
    
            socket.broadcast.emit('participants', 
                        {
                            name: data.name
                        }
            );
    
        });
    
    });

}