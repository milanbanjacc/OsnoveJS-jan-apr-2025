

function solve(num){
    let line = ""; // sadzace sve br koji se nalaze u trenutnoj liniji
    let isBigerNum = false; // proveravamo da li je trenutni br veci od zadatog
    let current = 1; // pocetni br za ispisivanje

     for (let i = 1; i <= num; i++){
        for (let j = 1; j <= i; j++){

            // ako je trenutni br veci od zadatog, prekidamo ispis
            if (current > num){
                isBigerNum = true;
                break;
            }

            line += current + " ";  // dodajemo razmak
            current++; // povecavamo trenutni br za jedan
        }
        // ispisujemo trenutnu liniju
        console.log(line);

        // resetujemo liniju za sledeci red
        line = "";

        // ako je trenutni br presao u zadati, prekidamo petlju
        if (isBigerNum){
            break;
        }
     }
}


solve(15);
