

function solve(n, m){
    let sum = 0;

    // inicijalizacija niza za skladistenje svih brojeva deljivih sa 9
    let numArr = [];

    // iteracija kroz svaki broj u opsegu od n do m (ukljucujuci oba broja)
    for (let i = n; i <= m; i++){
        // provera da li je broj deljiv sa 9
        if (i % 9 === 0){
            // dodajemo br u niz
            numArr.push(i);
            // dodajemo `i` u sumu
            sum += i;
        }
    }

    console.log(`The sum is: ${sum}`);

    for (let i = 0; i < numArr.length; i++){
        console.log(`${numArr[i]}`);
    }
}

solve(100, 200);
