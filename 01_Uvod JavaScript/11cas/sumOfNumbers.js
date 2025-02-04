

function solve(start, end, magicNum){
    let isMagic = false; // promenljiva koja prati da li je pronadjena kombinacija koja odg magicnom br
    // brojac za isprobane kombinacije
    let combination = 1;

    // spoljasnja petlja za prvi br, ide od pocetka do kraja
    for (let i = start; i <= end; i++){
        for( let j = start; j <= end; j++, combination++){
            // provera da li je zbir i i j jednak magicnom br
        if(i + j === magicNum){
            // ako je tacno menjamo vrednost zastavice
            isMagic = true;
            console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
            break;
        }
    }
    if(isMagic){
        break;
    }
    }
    if(!isMagic){
        console.log(`${combination - 1} combinations - neither equals ${magicNum}`);
    }
}

solve(1, 10, 5);
