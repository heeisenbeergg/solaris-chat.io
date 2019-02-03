const socket = io('https://solaris-chat.herokuapp.com');

$('#send_msg').click( () => {

    let data = {
            name: $('#name').val(),
            message: $('#message').val(),
            channel: $('#channel').val()
        };
    
    socket.emit('sendMsgServer',  data );

    createDialog(data);

});

socket.emit('join', { channel: $('#channel').val() });

socket.on('userConnected', (data) => createDialog(data) );

socket.on('participants', (data) => showParticipants(data) );