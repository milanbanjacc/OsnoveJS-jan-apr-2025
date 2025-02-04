


// kao argument dobijamo niz
function solve(input){
    // uzimamo prvi iznos iz niza kao prvi depozit
    let deposit = input[0];

    // inicijalizacija trenutnog stanja racuna
    let balance = 0;

    // pocetna pozicija indeksa je 1
    let index = 1;

    // pokrecemo while petljlu koja ce se izvrsavati sve dok unos nije No more money
    while (deposit !== "NoMoreMoney"){
        // sada depozit pretvaramo u br zato sto ce biti i stringova u nizu
        let amount = Number(deposit);
        // proveravamo da li je iznos manji od 0
        if (amount < 0){
            // ako jeste, ispisujemo poruku i izlazimo iz petlje
            console.log(`Invalid operation!`);
            break;
        }

        // dodajemo iznos trenutnog stanja naseg racuna
        balance += amount;
        // dalje ide ispis poruke o trenutnom povecanju koji se iznad desio
        console.log(`Increase: ${amount.toFixed(2)}`);

        // uzimamo sl depozit iz niza
        deposit = input[index];
        index++;
    }

    // kada se program zavrsi treba ispisati por o ukupnom stanju racuna
    console.log(`Total: ${balance.toFixed(2)}`);
}



solve([5.51, 
    69.42,
     100,
     "NoMoreMoney"]);
     