

function solve(num){
    num = Number(num);

    // broj je validan ako je 0 ili ako je u opsegu od 100 do 200
    if (num === 0 || (num >= 100 && num <= 200)){
        console.log("valid");
    } else {
        console.log("invalid");
    }
}

solve(150);
