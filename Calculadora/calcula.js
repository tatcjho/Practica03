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

    document.getElementById("valores").value=anterior+num;

}

//Funcion para eliminar el ultimo caracter 

function eliminar(){

    var anterior=document.f1.valores.value;

    var nuevovalor=anterior.substring(0,anterior.length-1);

    document.getElementById("valores").value=nuevovalor;
}


//Funcion para eliminar todo

function borrarTodo(){
    document.f1.valores.value = "";
}

//Funcion para realizar las operaciones 


function operacion(num){ 

    var anterior = document.f1.valores.value;
    if(anterior==""){
    document.f1.valores.value="";
    }else{    
        var anterior = document.f1.valores.value;
        document.getElementById("valores").value=anterior+num;
        esto=document.f1.valores.value;
    
        record=0; 
        igual=1; 
        var letraRecord 
        var b=0 
        var letra="" 
    
        for (a=1;a<esto.length;a++){      
        if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="."){ 
        igual=igual+1; 
        letra=esto.charAt(a);
        }else{ 
             if(igual>record){record=igual;letraRecord=letra} 
                igual=1 
             } 
             b=a 
        }
        
        if(igual>record){
          record=igual;
          letraRecord=letra;
        } 
    
        if (record>2){
            var anterior = esto;
            var nuevovalor = anterior.substring(0, anterior.length-1);
            document.getElementById("valores").value=nuevovalor;
            record=0;b=0;igual=1;letra="";letraRecord="";
        }     
    } 
    
    }

    //Funcion para realizar las operaciones 

    function calcular(){
        var resultado=eval(document.f1.valores.value);
    
        if(resultado=="Ii"){
            document.f1.valores.value="No se puede dividir entre cero";
    
        }else{
            document.f1.valores.value=resultado;
        }
        
    }