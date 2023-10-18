var numero = 10;
var factor = 2;
var resultado = numero * factor;
console.log(resultado);

var texto = "Hola";
var name = "Francy";
var saludo = texto + " " + name;
console.log(saludo);
var flag = true;
var flag = false;

var numer1 = 1;
var numero2 = 2;

var result = numer1 == numero2; // true o false

for (
    var i = 0;
    i <= 10;
    i = i + 1
) {
    console.log(i);
}

var j = 0;

while (j <= 10) {
    console.log(j);
    j = j + 1;
}

var coin = Math.random();

if (coin > 0.5) {
    console.log("Sello");
} else {
    console.log("Cara");
}

var score = Math.random();

if (score < 0.3) {
    console.log("Rojo");
} else if (score < 0.6) {
    console.log("Amarillo");
} else {
    console.log("Verde");
}

var state = "SOLD";
var text;
switch (state) {
    case "NEW":
        text = "Nuevo";
        break;
    case "USED":
        text = "Usado";
        break;
    default:
        text = "No definido";
}

alert(text);

var flag = confirm("Confirma la acción?");
console.log(flag);

var value = prompt("Ingrese un valor");
console.log(value + "!");