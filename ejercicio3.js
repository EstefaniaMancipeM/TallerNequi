const prompt = require("prompt-sync")();

let opcion;

do {

    console.log("===== Menu Nequi =====");
    console.log("1. ver saldo");
    console.log("2. enviar dinero");
    console.log("3. recargar");
    console.log("4. salir");

    opcion = prompt("seleccione una opcion: ");

    if (opcion == 1) {
        console.log("tu saldo es de $1.500.000");
    }

    if (opcion == 2) {
        console.log("función para enviar dinero.");
    }

    if (opcion == 3) {
        console.log("función para recargar.");
    }

    if (opcion == 4) {
        console.log("gracias por usar Nequi.");
    }

} while (opcion != 4);
