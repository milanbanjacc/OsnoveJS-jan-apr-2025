// zelimo da nasa funkcija ima 3 elementa i da ih isisemo
// u nasem slucaj je nazvan input i on cuva mesto za niz elementa

function solve(input){
    console.log(input[0]); // a
    console.log(input[1]); // b
    console.log(input[2]); // c
}

solve(["a", 'b', 'c']);
solve([1, 5, 7]);
solve(["Soft", "Uni", "Hello"]);

// sintaksa za pisanje nizova
let niz = [1, 2, 3];

// sintaksa za pisanje funkcije:
function nazivFunkcije(ocekivaniArgumenti) {
    // telo funkcije
    // ovde se nalazi logika naseg koda unutar viticastih zagrada...
}
// pozivanje funkcije pisemo u nastavku posle viticastih zagrada
// unutar obicne zagrade pisemo sta zelimo da se izvrsi
nazivFunkcije(1);