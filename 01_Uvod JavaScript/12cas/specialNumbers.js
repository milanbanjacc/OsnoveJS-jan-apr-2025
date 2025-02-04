

function solve(n){
    // promenljiva u kojoj cemo sacuvati sve specijalne brojeve
    let line = "";

    // 1111 - 9999 --> trebaju nam 4 for petlje za svaki br pojedinacno
    // proveravamo da li n prilikom deljenja sa svakom cifrom ostaje nula
    // prva petlja se odnosi na prvu cifru, druga na drugu cifru itd...
    for (let a = 1; a <= 9; a++){
        for (let b = 1; b <= 9; b++){
            for (let c = 1; c <= 9; c++){
                for (let d = 1; d <= 9; d++){
                    // proveravamo da li je uneti br deljiv sa svim ciframa a, b, c, d
                    // ako je deljiv, dodajemo ga u liniju za ispis
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0){
                    line += "" + a + b + c + d + " ";
                }
                    // ako se string nalazi NA POCETKU, ceo nastavak se tretira kao string!
                }
            }
        }
    }

    // nakon sto smo prosli kroz sve kombinacije, ispisujemo specijalne br
    console.log(line);
}

solve(3);
