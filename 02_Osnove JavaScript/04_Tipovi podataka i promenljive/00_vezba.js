// console.log(y); // ne moze se pristupiti ispisu pre inicijalizacije (let ne radi hoisting)
console.log(z); // promenljiva z postoji jer var radihoisting (pisace undefined ali ne error)

let y = 5;
var z = 8;

function testFunkcija() {
  console.log(x); // undefined (deklarisana je promenljiva, ali jos nije dodeljena vrednost)
  if (5 === 5) {
    var x = 2;
  }
  var x; // nije greska, moze vise puta da se deklarise zbog hoistingovanja
  console.log(x);
}

testFunkcija();
// console.log(x); // GRESKA! (oblast vazenja za var je unutar funkcije)

function DrugaTestFunkcija() {
  // console.log(x); // ne moze! let moze samo unutar bloka da se pristupa
  if (5 === 5) {
    let x = 2;
  }
  // console.log(x); // ne moze
  let x = 6; // ovo ovde je nova promenljiva i nema veze sa x iz prethodnog bloka
  console.log(x);
  for (let x = 1; x <= 5; x++) {
    console.log(x);
  }
}
DrugaTestFunkcija();

console.log(y);
console.log(z);
