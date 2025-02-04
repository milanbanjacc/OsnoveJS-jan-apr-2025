


let n = 5;
console.log(typeof n);

n = "Milan";  // Deklaracija promenljive samo jednom!
console.log(typeof n); // string

n = -8.95;
console.log(typeof n); // number

let p;
console.log(typeof p); // undefined

p = null;
console.log(typeof p); // object , null je prazna vrednost


let q = null;
console.log(typeof q);

// petlje u js
let counter = 0;
while (counter <= 9) {
    console.log(counter);
    counter++;
}


// for petlja u js
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// console.log(i);  ne moze da se pristupi promenljivoj "i"
