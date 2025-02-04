

let a = 7;

if(a > 4){
    console.log("Bigger than 4");
} else if (a > 5) {
    console.log("Bigger than 5");
} else {
    console.log("Equal to 7");
}
/* u ovom slucaju iznad su sva tri slucaja tacna ali ce program izbaciti prvi po redu tacan slucaj,
iako su odvojeni blokovi viticastim zagradama, zato sto je namenjen else if.
ako ovde umesto else if stavimo samo if, onda ce izbaciti oba rezultata u ovom primeru sa br 7 */

