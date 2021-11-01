//Desafio 1 - JS Smple

//APP para saber si es mayor de edad para tomar alcohol

//Variables
let nombreCliente = prompt ("¿Como te llamas?");
let edadCliente = prompt (nombreCliente + " ¿Que año naciste (Ej. 1982)?");
let añoActual = 2021;
let edad = añoActual - edadCliente;

//Condicion 
if(edad >= 18 ){
    alert(nombreCliente + " Eres mayor de edad, compra de todo!!😉");
}
else
    if(edad <= 17){
        alert(nombreCliente + " Eres menor de edad, te esperamos cuando cumplas 18!!😉");
    }

