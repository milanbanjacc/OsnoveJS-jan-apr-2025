

function solve(input){
    // ime studenta je prvi element
    let name = input[0];
    // inicijalizacija pocetnih vrednosti
    let grades = 1; // godina studija
    let sum = 0; // suma svih ocena
    let excl = 0; // ukupan br ponavljanja
    let index = 0;

    // pokrecemo petlju sve dok ne ispunimo svih 12 godina studija
    while (grades <= 12){
        // povecavamo index kako bismo uzeli sl ocenu u nizu
        index++;
        // uzimamo ocenu iz niza i pretvaramo je u br
        let grade = Number(input[index]); // u prvoj interaciji je to input[1]...
        // da li je trenutna ocena manja od 4.00
        if (grade < 4.00){
            // povecavamobr ponavljanja za 1
            excl++;

            if (excl > 1){
                // index oznacava poziciju u nizu, sto nam predstavlja takodje koja je godina studija
                // moramo smanjiti index za 1 da bi to bila tacna godina kada je student pao
                console.log(`${name} has been excluded at ${index - 1} grade`);
                break;
            }
        }
        // trenutnu ocenu dodajemo zbiru ocena
        sum += grade;
        // povecavamo br trenutnih godina studija
        grades++;
    }

    // ukoliko student nije iskljucen, ispisujemo prosecnu ocenu
    if (excl < 2){
        let average = Number(sum / 12);
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}



solve(["Mary", 
    5,
     6,
     5,
     6,
     5,
     6,
     6,
     2,
     3]);
     