

function solve(input){
    // prvi element iz niza
    let inputElement = input[0];

    let index = 1;
    // inicijalizacija vrednosti promenljive min
    // kada trazimo najmanji br koji ce biti u promenljivoj onda pisemo suprotno od proslog zadatka
    let min = Number.MAX_SAFE_INTEGER;


    while (inputElement !== "Stop"){
        let num = Number(inputElement);
        
        if (num < min){
            min = num;
        }
        inputElement = input[index];
        index++;
    }

    console.log(min);
}

solve([100,99,80,70,"Stop"]);
    