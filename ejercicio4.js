let movimientos = [50000, 0, -20000, -15000, 0, -30000, 100000];

for (let i = 0; i < movimientos.length; i++) {

    if (movimientos[i] === 0) {
        continue;
    }

    if (movimientos[i] === -300000) {
        console.log("Pago a comercio encontrado en la posición:", i);
        break;
    }

    console.log("Movimiento:", movimientos[i]);

}