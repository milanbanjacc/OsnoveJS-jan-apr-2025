

// izlaz funkcije treba da vrati prvo bonus poene a zatim ukupan br poena
// funkcija uzima samo jedan argument - poeni

function calculate(points){
    // pretvaranje argumenta u br, ako pilo sta unesemo osim broja ispisace da nismo uneli br
    let num = Number(points);
    // inicijalizacija promenljive za cuvanje bonusa
    let bonus = 0.0;

    // ako je br manji ili jednak 100, dodajemo 5 poena
    if (num <= 100) {
        bonus = 5;
    }  // ako je br veci od 1000 dodajemo 10% na bodove
    else if (num > 1000){
        bonus = num * (10 / 100);
    }  
    // ako je broj izmedju 100 i 1000 dodajemo 20%
    else {
        bonus = num * (20 / 100);
    }

    // ako je br paran dodajemo 1 bod na prethodni bonus
    if (num % 2 === 0){
        bonus = bonus + 1;
    }

    // ako se br zavrsava sa 5 dodajemo 2 boda na prethodni br
    if (num % 10 === 5){
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(num + bonus);
}


calculate(20);

