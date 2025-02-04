

function solve(n1, n2){
    // promenljiva za cuvanje br koji ispunjavaju uslov
    let line = "";

    // prolazimo kroz br od n1 do n2
    for (let i = n1; i <= n2; i++){
        // najlaksi nacin da napravimo i string, da bismo mogli pristupiti ciframa pojedinacno
        let currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;

        // prolazimo kroz cifre trenutnog br
        // j ce biti 0 zato sto je 0 index prvi element, tj prvi br u nizu te cifre
        for (let j = 0; j < currentNum.length; j++){
            // uzimamo cifru sa trenutne pozicije i pretvaramo je u br
            let currentDigit = Number(currentNum[j]);

            // proveravamo da li se cifra nalazi na parnoj ili neparnoj poziciji
            if (j % 2 == 0){
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        // proveravamo da li su sume na parnim i neparnim pozicijama
        // ako jesu dodajemo br u liniju za ispis

        if (evenSum === oddSum){
            line += `${i} `;
        }

        
    }
    // ispisujemo sve br koje smo dobili u liniju
    console.log(line);
}

solve(100000, 100050);
