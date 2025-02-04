


function solve(n){
    n = Number(n);
    let linija = "";
    let isBigger = false;
    let trenutniBr = 1;

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            
            if (trenutniBr > n){
                isBigger = true;
                break;
            }

            linija += trenutniBr + " ";
            trenutniBr++;
        }

        console.log(linija);
        linija = "";

        if (isBigger){
            break;
        }
    }
}

solve(15);
