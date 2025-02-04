

function solve(n){
    // inicijalizujemo promenljivu za cuvanje rezultata mnozenja
    let result = 0;

    for (let i = 1; i <= 10; i++){
        result = i * n;
        console.log(`${i} * ${n} = ${result}`);  // console.log mora da bude unutar for petlje jer ispisuje `i`!
    }
}

solve(5);
