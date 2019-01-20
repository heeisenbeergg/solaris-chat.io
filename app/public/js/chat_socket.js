const socket = io('http://localhost:9000');

$('#enviar_msg').click( () => {

    let apelido = $('#apelido').val();
    let mensagem = $('#mensagem').val();

    socket.emit('enviarMsgServidor', 
                { apelido: apelido,
                    mensagem: mensagem
                }
    );

    $('#mensagem').val('');

});			

socket.on('usuarioConectou', (data) => {
    
    let html = '<div class="dialogo">';
            html +=	'<h4>' + data.apelido + '</h4>';
            html +=	'<p>' + data.mensagem + '</p>';
        html += '</div>';

    $('#conversa').append(html);

    window.scrollTo(0, document.body.scrollHeight);

});

socket.on('participantes', (data) => {

    let html = '<span class="participante">';
            html += data.apelido;
        html += '</span>';

    $('#pessoas').append(html);

});