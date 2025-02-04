

function solve(){
    // inicijalizujemo prvi cinilac
    let first = 1;

    while (first <= 10){
        for(let second = 1; second <= 10; second++){
            // petlja koja ce prolaziti kroz sve brojeve do 10 i pomnoziti ih sa prvim ciniocem
            // ispis rezultata
            console.log(`${first} * ${second} = ${first*second}`);
        }
        first++;
    }
}

solve();
