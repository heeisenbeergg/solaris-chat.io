const socket = io('http://localhost:9000');

$('#send_msg').click( () => {

    let name = $('#name').val();
    let message = $('#message').val();

    socket.emit('sendMsgServer', 
                { 
                    name: name,
                    message: message
                }
    );

    $('#message').val('');

});			

socket.on('userConnected', (data) => {
    
    let html = '<div class="dialogue">';
            html +=	'<h4>' + data.name + '</h4>';
            html +=	'<p>' + data.message + '</p>';
        html += '</div>';

    $('#conversation').append(html);

    window.scrollTo(0, document.body.scrollHeight);

});

socket.on('participants', (data) => {

    let html = '<span class="participant">';
            html += data.name;
        html += '</span>';

    $('#peoples').append(html);

});