

/* u nastavku ne stavljamo let, jer time bismo automatski napravili novu promenljivu
inch je vec napravljen u sklopu poziva metode ili tzv argument
vec smo inch deklarisali kao parametar
vec je napravljena lokacija time sto smo je stavili kao argument */

function solve(inch){
    inch = Number(inch);
    let cm = inch * 2.54;
    console.log(cm);
}

solve(5);


