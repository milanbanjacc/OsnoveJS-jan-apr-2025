

function solve(input){
    // prva dva elementa se odnose na dimenziju torte
    let dimension = Number(input[0]) * Number(input[1]);

    // indeks treba da krene od trece pozicije
    let i = 2;

    // inicijalizacija uzetih parcica torte
    let pieces = 0;

    // petlja koja ce se izvrsavati dokle god imamo elemente u nizu
    while (input[i]){
        // ako komanda nije stop, dodajemo br uzetih parcica
        if (input[i] !== "STOP"){
            pieces += Number(input[i]);
        }

        if (input[i] === "STOP"){
            break;
        }

        i++; // povecavamo indeks za sledeci element
    }

    // proveravamo da li je uneti br manji ili veci od unete torte

    if (pieces > dimension){
        // ispisujemo koliko nam je jos parcica potrebno
        console.log(`No more cake left! You need ${pieces - dimension} pieces more.`);
    } else {
        // ispisujemo koliko je parcica jos ostalo
        console.log(`${dimension - pieces} pieces are left.`);
    }
}

solve([10,2,2,4,6,"STOP"]);
