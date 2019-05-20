var imagenes = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg']

cont=0;
var nuevo = 0;


    function cambio(contenedor) {
   
        var m = imagenes.length;

	    for(var i= 0;i<5;i++){
            aleatorio = Math.floor(Math.random() * m--);
            nuevo =nuevo+","+aleatorio;
        }
    }
    
    document.addEventListener("DOMContentLoaded",() =>{
       let contenedor = document.querySelector('.contenedor');
    })

  
   contmax=0;
   contmin=0;

   function next(){
        if(contmax<10){
            contmax=contmax+2;
           // alert(imagenes[contmax]);
            document.getElementById('imagen').src =imagenes[nuevo[contmax]];
        }
        else
         alert('Ultima imagen')
 
    }


   function prev(){
        if(contmax > 0){
            contmax=contmax-2;
            document.getElementById('imagen').src =imagenes[nuevo[contmax]];
        }
        else
            alert('Ultima imagen')
    }   
