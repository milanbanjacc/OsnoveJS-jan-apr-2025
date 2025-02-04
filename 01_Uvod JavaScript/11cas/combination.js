
// ukoliko proveravamo sa ===, moramo da budemo sigurni da je n broj (Number(n))
// a ako stavimo == onda ce proveravati kao i string, tj nije tako striktna provera

function solve(n){
    n = Number(n);
    // inicijalizujemo brojac za sve moguce kombinacije
    let count = 0;

    for(let x1 = 0; x1 <= n; x1++){
        for(let x2 = 0; x2 <= n; x2++){
            for(let x3 = 0; x3 <= n; x3++){
                // proveravamo da li je zbir x1+x2+x3 jednak sa n
                // ukoliko jeste, povecavamo cound
                if(x1 + x2 + x3 === n){
                    count++;
                }
            }
        }
    }

    console.log(count);
}

solve(25);
