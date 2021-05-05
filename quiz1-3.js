
function change() {
    $("#aa").html("CSIE@CGU");
    $("#bb").html("怎麼那麼棒")
    
}

function new_button() {
    var btn="<button id='change'>Change this document</button>";
    $("body").append(btn);
    $("#change").click(change);
    
}
$("#btn").click(new_button);
