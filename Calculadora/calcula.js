//Funcion para validar que solo se acepte numeros 

function soloNumeros(e){

    key =e.keyCode || e.which; //entrada del teclado
    teclado=String.fromCharCode(key);

    numeros="0123456789";
     
    especiales="8-37-39-46";

    tecla_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            tecla_especial=true;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !tecla_especial){
        return false;
    }
}


//Funcion para asignar cada valor 
function retornar(num){

    var anterior=document.f1.valores.value;

