function validar(){
    var cedula, nombre, apellido, direccion, phone, fechaNac,email;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    phone = document.getElementById("phone").value;
    fechaNac = document.getElementById("fechaNac").value;
    email = document.getElementById("email").value;

    if(nombre =="" || apellido =="" || direccion =="" || phone =="" || fechaNac =="" || email == "" ){
        alert("Todos los campos son obligatorios");
    return false;
    }

}

function sololetras(elemento) {
    key=elemento.keyCode || elemento.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="qwertyuiopasdfghjklñzxcvbnm ";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}

function soloNumeros(elemento){
    var key=elemento.keyCode || elemento.which; ;
    
    key=elemento.keyCode || elemento.which;

    teclado=String.fromCharCode(key).toLowerCase();

    numeros="0123456789 ";

    especiales=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !especiales){
        return false;
    }

}