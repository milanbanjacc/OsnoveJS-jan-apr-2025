

function solve(){
    for (let i = 7; i <= 997; i += 10){
        // i += 10 da bi se ceo niz suzio na samo jedan br a ne svih deset za proveru
        // moze da se napise i++ ali onda ce svaki br pojedinacno da proverava da li se zavrsava na 7

        if (i % 10 === 7){
            console.log(i);
        }
    }
}

solve();
