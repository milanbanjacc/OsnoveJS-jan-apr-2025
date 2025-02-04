

function solve(input){

    // postavljanje pocetnog indeksa na 0!
    let index = 0;

    // pokrecemo petlju koja je na pocetku beskonacna!

    while (true){
        // uzimamo trenutni element niza na poziciji indeksa
        let str = input[index];  // input na poziciji nula, pa ce onda biti 1, pa dva...
        index++;

        // proveravamo da li je trenutni element u nizu jednak "Stop"
        if (str === "Stop"){
            // ukoliko je str=stop prekidamo petlju
            break;
        }

        // ukoliko nije stop onda se ispisuje
        console.log(str);
    }
}


solve(["Smith","SoftUni","London","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);
