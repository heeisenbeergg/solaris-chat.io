$(document).ready(function(){
    $("#show_chat").click(function(){
        $("#conversation").show();
        $("#participants").hide();
        ocultaNavbar();
    });
    
    $("#show_participants").click(function(){
        $("#participants").show();
        $("#conversation").hide();
        ocultaNavbar();
    });
});

function ocultaNavbar(){
    $("#btn_navbar_toggle").attr("class","navbar-toggle collapsed");
    $("#navbar-collapse-1").attr("class","navbar-collapse collapse");
    $("#btn_navbar_toggle").attr("aria-expanded","false");
    $("#navbar-collapse-1").attr("aria-expanded","false");
}

function createDialog(data) {

    let html = '<div class="dialogue">';
            html +=	'<h4>' + data.name + '</h4>';
            html +=	'<p>' + data.message + '</p>';
        html += '</div>';

    $('#conversation').append(html);

    $('#message').val('');

    window.scrollTo(0, document.body.scrollHeight);

}

function showParticipants(data) {

    let html = '<span class="participant">';
            html += data.name;
        html += '</span>';

    $('#peoples').append(html);

}