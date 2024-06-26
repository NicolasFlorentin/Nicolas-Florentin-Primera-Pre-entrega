let edad = parseFloat(prompt("por favor ingrese su edad"));

if (edad >= 18){
    alert("eres mayor de edad, vas a poder hacer estos calculos matematicos");
} else{
    alert("eres menor de edad, esto te va a dificultar pero no hay problema, puedes entrar");
}

let ingresenombre = prompt("ahora ¡conoscamonos!, ¿como te llamas?:");

alert("¡vienvenido!, " + ingresenombre);

let ingresapellido = prompt("bueno, ahora ¿cual es tu apellido?:");

function nombreCompleto(nombre, apellido){

alert("¡que lindo apellido! " + nombre + " " + apellido);
}

let nombreIngresado = ingresenombre;

let apellidoIngresado = ingresapellido;

nombreCompleto(nombreIngresado, apellidoIngresado);


alert("me presento, yo soy Nicolas Florentin");

alert("esta pagina consiste para hacer calculos matematicos");

alert("¡practiquemos matematicas!");

let numeroingresado5 = parseInt(prompt("ingrese un el numero que quiera para saber su tabla de multiplicar del 1 al 10, de todas formas el siguiente numero que le vamos a preguntar es el 5"));
let salida = "tabla del " + numeroingresado5 + "\n\n";

for (let i=1; i<=10; i++) {
    let resultado5 = numeroingresado5 * i;
    salida += numeroingresado5 + "x" + i + " = " + resultado5 + "\n";
}

alert(salida);

alert("perfecto, ahora escriba la respuesta correcta:");

let ingresar5 = prompt("¿cuanto es 5 multiplicado por 6");

while(ingresar5 != "30"){

    if (ingresar5.toLowerCase() == "30"){
        alert("¡correcto!");
        break;
    }

    alert("ingresaste el texto: " + ingresar5)
    ingresar5 = prompt("no es la respuesta correcta, intenta de nuevo");
}

alert("¡super!, siempre confie en ti");

alert("ahora probemos algo mas complicado");

let numeroingresado8 = parseInt(prompt("ahora probemos con la tabla del 8, recuerda escribe el 8 para saberla"));
let salida8 = "tabla del " + numeroingresado8 + "\n\n";

for (let i=1; i<=10; i++) {
    let resultado8 = numeroingresado8 * i;
    salida8 += numeroingresado8 + "x" + i + " = " + resultado8 + "\n";
}

alert(salida8);

alert("perfecto, ahora escriba la respuesta correcta:");

let ingresar8 = prompt("¿cuanto es 8 multiplicado por 9");

while(ingresar8 != "72"){

    if (ingresar8.toLowerCase() == "72"){
        alert("¡correcto!");
        break;
    }

    alert("ingresaste el texto: " + ingresar8)
    ingresar8 = prompt("no es la respuesta correcta, intenta de nuevo");
}

alert("eres asombroso");

alert("ahora probemos la ultima cuenta y la mas dificil")

let numeroingresado18 = parseInt(prompt("escriba la tabla del 18"));
let salida18 = "tabla del " + numeroingresado18 + "\n\n";

for (let i=1; i<=40; i++) {
    let resultado18 = numeroingresado18 * i;
    salida18 += numeroingresado18 + "x" + i + " = " + resultado18 + "\n";
}

alert(salida18);

alert("perfecto, ahora escriba la respuesta correcta:");

let ingresar18 = prompt("¿cuanto es 18 multiplicado por 7");

while(ingresar18 != "126"){

    if (ingresar18.toLowerCase() == "126"){
        alert("¡correcto!");
        break;
    }

    alert("ingresaste el texto: " + ingresar18)
    ingresar18 = prompt("no es la respuesta correcta, intenta de nuevo");
}

function despedida(a1, a2, a3){

    alert(a1 + " " + a2 + " " + a3)
}

let pregunta = prompt("¿te gusto esta pagina?");

let nos_vemos = prompt("proximamente habra mas ¿vas a volver?");

let adios = alert("genial, eres un buen matematico, adios");

despedida(pregunta, nos_vemos, adios);
