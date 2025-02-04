

let a = 1.5;
let b = 2.5;
let zbir = a + b;

// u ovom slucaju ne mora da se kuca funkcija
// ukoliko nismo napisali let zbir, vec samo a + b, onda ce oba broja da se prikazu spojeno jedan uz drugi

let sum = "The sum is: " + zbir;
console.log(sum);

// mozemo takodje da napisemo i funkciju
// posto smo u istom fajlu, u sledecoj funkciji pisem ime funkcije "iznos" umesto "zbir"!

function iznos(a, b){
    let result = a + b;
    let sum = "The sum is: " + result;
    console.log(sum);
}

iznos(2, 2);
