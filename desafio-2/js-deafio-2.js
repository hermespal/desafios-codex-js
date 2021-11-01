//Desafio 1 - JS Smple

//APP para saber el Indice de masa Corporal
/* 
MG = Peso / Altura elevado al cuadrado * 100. Segun resultado:
Bajo peso > 18.5
Normal 18.5 a 24.9
Sobre peso 25 a 29.9
Obesidad >30
*/

//Variables
let nombreCliente = prompt ("¿Como te llamas?");
let pesoCliente = prompt (nombreCliente + " ¿Cuanto pesas (Ej.: 80)?");
let alturaCliente = prompt (nombreCliente + " ¿Cuanto mides (Ej.: 170)?");
let imc = (pesoCliente * 100) / (alturaCliente ** 2) * 100;

// Condicion 
if(imc >= 0 & imc <= 18.5 ){
    alert(nombreCliente + " Estas bajo de peso!!😢");
} 
else
    if(imc >= 18.5 & imc <= 24.9){
        alert(nombreCliente + " estas en tu peso ideal!!😉");    
} 
else
    if(imc >= 25 & imc <= 29.5){
        alert(nombreCliente + " estas en sobre pesos, debes hacer dieta!!😉");
}
else{
    if(imc >= 30){
        alert(nombreCliente + " estas Obeso, visita al Nutricionista!!😉");
    }
}
