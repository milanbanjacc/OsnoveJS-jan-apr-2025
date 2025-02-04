



function provera(br1, br2, br3){
    let a = Number(br1);
    let b = Number(br2);
    let c = Number(br3);

    if (a === b || b === c || a === c){
        console.log("Brojevi su jednaki.");
    }

    if (a < b && b < c && a < c){
        console.log(`${a}, ${b}, ${c}`);
    } else if (b < c && c < a && b < a){
        console.log(`${b}, ${c}, ${a}`);
    } else if (c < a && a < b && c < b){
        console.log(`${c}, ${a}, ${b}`);
    }
}



provera(1, 5, 3);
