//Desafio 3 - JS Smple

/*
Algoritmo para permitir un maximo de 4 usuarios.
*/

for( let i = 0 ;  i < 5 ; i++ ){

    let usuario = prompt("Cual es tu nombre");
    let numeroUsuarios = i;

    if(numeroUsuarios >= 4 ){
        alert("Numero de usuario alcanzados");
    }
    else{
        console.log(usuario + " " + "eres el usuario" + " " + i);
    }
}
