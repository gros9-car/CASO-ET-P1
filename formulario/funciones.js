var nombre = document.getElementById("nombre");
var password = document.getElementById("password");
var error = document.getElementById("error");
error.style.color = "red";


function enviarFormulario(){
    console.log("Enviando. Espere...")

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if(password.value === null || password.value === ""){
        mensajesError.push("Ingresa tu password");
    }

    return false;
}