


function solve(num){
    num = Number(num);

    // uslovi: veci ili jednak od -100
    // ne sme da bude 0
    // manji ili jednak od 100

    if (num >= -100 && num != 0 && num <= 100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

solve(5);
solve(0);
solve(-15);
solve(-150);
solve(105);
