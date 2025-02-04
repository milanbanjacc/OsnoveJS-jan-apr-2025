

// inicijalizacija promenljive
// moze biti samo jedna promenljiva, ne mozemo staviti dve razlicite vrednosti za isti a!
// a je globalna promenljiva i dostupna je svuda u ovom kodu
let a = 5;

console.log(a);
if(true){
    // sve sto se inicijalizuje u okviru if-a predstavlja blokovski opseg i dostupno je samo u okviru bloka!
    // let a u if-u i van if-a ne spadaju u isti opseg izvrsavanja
    // ako je unutar viticastih zagrada, onda mozemo dodeliti drugu vrednost promenljive
    let a = 10;
    console.log("a unutar if-a " + a);
}

console.log(a);
