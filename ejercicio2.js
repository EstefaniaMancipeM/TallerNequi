const prompt = require("prompt-sync")();
const pinCorrecto = "1992";
let intento = prompt("Escribe tu PIN: ");
while (intento !== pinCorrecto) {
console.log("PIN incorrecto");

intento = prompt("Intenta nuevamente: ");

}
console.log("¡Bienvenido a Nequi!");