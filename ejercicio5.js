let usuarios = [
    {
        nombre: "Jefferson",
        movimientos: [2000000, -10000, 50000]
    },
    {
        nombre: "Gladis",
        movimientos: [30000000, -500000, -10000]
    },
    {
        nombre: "Héctor",
        movimientos: [350000, -250000, 70000]
    }
];

for (let i = 0; i < usuarios.length; i++) {

    let totalUsuario = 0;

    for (let j = 0; j < usuarios[i].movimientos.length; j++) {

        totalUsuario += usuarios[i].movimientos[j];

    }

    console.log("Usuario:", usuarios[i].nombre);
    console.log("Total:", totalUsuario);
    console.log("-------------------------");

}