
// BOOLEAN je tip podatka koji moze biti samo tacno ili netacno
// boolean --> true ili false
// == vrse konverziju tipova
    // ovako program proverava: number == string --> string == string, "1" == "1" --> true


console.log(1 == "1");  // true

// === ne vrse konverziju tipova
    // number === string --> nisu isti tipovi i izbacuje false

console.log(1 === "1"); // false

// kada hocemo da pitamo program da li nesto nije jednako onda umesto prve zagrade stavljamo !
// npr: != ili !==

console.log(1 != "1"); // false!
console.log(1 !== "1"), // true!

// TYPEOF je provera kog je tipa promenljiva koju smo uneli
console.log(typeof true);

let a = 5;
let b = "5";
console.log(typeof a);
console.log(typeof b);
