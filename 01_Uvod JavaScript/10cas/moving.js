

function solve(input){
    // prva tri elementa su dimenzije prostora, racunamo slobodan prostor
    let freeSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);
    // index za koriscenje
    let i = 3;

    // pravimo petlju za izvrsavanje dokle god imamo slobodnog prostora
    while (freeSpace > 0){
        // ako je trenutni unos Done, ispisujemo preostali slobodan prostor i izlazimo iz funkcije
        if (input[i] === "Done"){
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }
        // smanjujemo slobodan prostor za br unetih kutija
        freeSpace -= Number(input[i]);
        i++; // sledeci element dalje
    }

    // proveravamo ako je slobodan prostor manji od 0 da bi se ispisala poruka
    if (freeSpace < 0){
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}



solve([10, 1,2,4, 6,"Done"]);
