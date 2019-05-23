# Practica03
ACTIVIDADES DESARROLLADAS

ACTIVIDAD 1:
 
 ![1](https://github.com/tatcjho/Practica03/blob/master/Capturas/calculadora.png)
Ilustración 1 Captura de la calculadora
A continuación, se presenta el código que se aplicó para poder resolver las operaciones aritméticas:

function suma(x) 
{
   if(x == 1) igual();
   if(n2 != "")
   {
      n1 = parseFloat(n1) + parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '+';
   pantalla(n1);
}

function resta(x) 
{
   if(x == 1) igual();
   if(n2 != "") 
   {
       n1 = parseFloat(n1) - parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '-';
   pantalla(n1);
}

function multi(x) 
{
   if(x == 1) igual();
   if(n2 != "")
   {
     n1 = parseFloat(n1) * parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '*';
   pantalla(n1);
}

function division(x) 
{
   if(x == 1) igual();
   if(n2 != "")
   {
      n1 = parseFloat(n1) / parseFloat(n2);
   }
   nuevoNum = "yes";
   opvalue = '/';
   pantalla(n1);
}
function raiz()
{
   n1 = Math.sqrt(n1);
   nuevoNum = "blank";
   pantalla(n1);
}
function porcentaje() 
{
   if(nuevoNum != "blank") 
   {
      n2 *= .01;
      nuevoNum = "blank";
      pantalla(n2);
   }
}
function cuadrado()
{
   n1 = Math.pow(n1,2);
   nuevoNum="blank";
   pantalla(n1);
}
function divUno() 
{
   n1 = 1/n1;
   nuevoNum = "blank";
   pantalla(n1);
}
function negativo() 
{
   n1 = parseFloat(-n1);
   nuevoNum = "no";
   pantalla(n1);
}

----------------------------------------------------------------------------------------------------------------------------------------

ACTIVIDAD 2:

 ![2](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20general%20validar%20registro.png)
Ilustración 2 Captura general validar registro



  ![3](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20que%20resalta%20los%20cuadros%20no%20llenados.png)
Ilustración 3 Captura que resalta los cuadros no llenados

  
 
En esta captura nos podemos percatar que, al llenar todos los campos, incluso los que señalo que debíamos llenar y pulsamos aceptar, nos redirige a una página php, en donde se muestra únicamente el mensaje que diciendo “Bienvenido, ¡pasaste las validaciones!”, mismo que nos indica que las validaciones fueron exitosas.

 ![8](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20identificando%20errores.png)
En esta captura nos podemos percatar que, al no llenar los campos correctamente estos se marcan de rojo, ya que en que en el placeholder se definió la estructura de como ingresar los datos, además son validaciones tales como:

•	Validación de cedula ecuatoriana.
•	Ingreso de fecha de nacimiento en el orden “DDMMYYYY”
•	Correo electrónico de la Universidad Politécnica Salesiana patito123@ups.edu.ec o patito123@est.ups.edu.ec



![9](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20sin%20errores.png)

En esta captura podemos identificar que se ha ingresado correctamente la información por lo que no marca con rojo alguna casilla, además cabe recalcar que el campo fecha de nacimiento, cedula y celular son solo numéricos; nombres y apellidos son solo letras, y en dirección esta para que ingrese normalmente.



----------------------------------------------------------------------------------------------------------------------------------------
ACTIVIDAD 3:
 
![4](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20galer%C3%ADa%20slider%20HTML%20js.png) 
Ilustración 4 Captura galería slider HTML js
En la presente captura se observa una galería la cual al pulsar el botón de inicio esta escogerá de manera aleatoria 5 imágenes de una carpeta de 10 imágenes. 

![5](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20de%20imagen%20hasta%20el%20numero%205.jpg)
Ilustración 5 Captura de imagen hasta el numero 5

 
![6](https://github.com/tatcjho/Practica03/blob/master/Capturas/Captura%20galer%C3%ADa%20slider%20HTML%20js.jpg)
Ilustración 6 Captura cuando llega a la primera imagen

ACTIVIDADES POR DESARROLLAR  
1.	Crear un repositorio en GitHub con el nombre “Practica03 – Javascript” 
![7](https://github.com/tatcjho/Practica03/blob/master/Capturas/github.png)
Ilustración 7 Captura de GitHub
URL REPOSITORIO: https://github.com/tatcjho/Practica03

