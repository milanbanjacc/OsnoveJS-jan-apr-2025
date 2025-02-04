
// funkcija prima samo jedan br
function solve(n){
    // inicijalizujemo promenljivu k = 1
    // formula za povecavanje je k = 2 * prethodni + 1

    let k = 1;

    // pokrecemo petlju dokle god je k = n
    // prvo k = 1 u pocetku, dalje ce biti k = 3, pa onda 7 ...
    while (k <= n){
        console.log(k);
        // dalje menjamo vrednost po formuli
        k = k * 2 + 1;
    }
}

solve(8);
