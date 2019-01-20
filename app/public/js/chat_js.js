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