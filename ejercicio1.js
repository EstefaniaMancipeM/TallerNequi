let movimientos = [130000, -5000, 10000, -50000, 1000000, -200000];

let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {

    total += movimientos[i];

    if (movimientos[i] < 0) {
        cantidadRetiros++;
    }

}

console.log("Total movido:", total);
console.log("Cantidad de retiros:", cantidadRetiros);
