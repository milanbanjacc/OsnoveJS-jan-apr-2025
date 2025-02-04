

function solve(input){
    // uzimamo prvi unos iz niza
    let inputElement = input[0];

    // inicijalizacija indeksa
    let index = 1;

    // inicijalizacija promenljive max
    // kada inicijalizujemo promenljivu koja prima i brojeve manje od nule (i negativne br) koristimo sledece:
    let max = Number.MIN_SAFE_INTEGER;

    // pokrecemo petlju koja izvrsava sve do "Stop"
    while (inputElement !== "Stop"){
        let num = Number(inputElement);
        // proveravamo da li je trenutni br veci od maksimuma
        if (num > max){
            max = num; // maksimu postajetrenutni br
        }

        // uzimamo sl br iz niza
        inputElement = input[index];
        index++;
    }

    console.log(max);
}




solve([-1,-2,
    "Stop"]
    );
    