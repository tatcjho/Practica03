var objetos = new Array();
objetos[0] = "images/1.jpg",
objetos[1] = "images/2.jpg";
objetos[2] = "images/3.jpg";
objetos[3] = "images/4.jpg";
objetos[4] = "images/5.jpg";
objetos[5] = "images/6.jpg";
objetos[6] = "images/7.jpg";
objetos[7] = "images/8.jpg";
objetos[8] = "images/9.jpg";
objetos[9] = "images/10.jpg";


function aleatorio(param) {
	var azar = Math.floor(Math.random() * objetos.length);
    
   
    document.images["imagen"].src = objetos[azar];

   function next(){
        if(contmax<10){
            contmax=contmax+2;
           // alert(imagenes[contmax]);
            document.getElementById('imagen').src =imagenes[nuevo[contmax]];
}     



   function prev(){
        if(contmax > 0){
            contmax=contmax-2;
            document.getElementById('imagen').src =imagenes[nuevo[contmax]];
        }
        else
            alert('Ultima imagen')
    }   
/* Establece el tiempo 1 minuto = 60000 milliseconds. */
window.setInterval("reFresh()",300000);
// -->
