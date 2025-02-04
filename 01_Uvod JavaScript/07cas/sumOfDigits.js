

function solve(num){
    // inicijalizacija promenljive za sumu
    let sum = 0;

    // sledi pretvaranje broja u string (zbog lakseg prolazenja kroz broj tj cifre) !!!
    let numString = num.toString();

    for (let i = 0; i < numString.length; i++){
        // pretvaramo karakter u br i dodeljujemo ga u sum!
        sum += parseInt(numString[i]); // moze i Number(numString[i])
    }

    // ispis rezultata
    console.log(`The sum of the digits is:${sum}`);
}


solve(1234);
