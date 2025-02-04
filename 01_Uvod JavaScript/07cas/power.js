

function solve(n){
    for (let i = 0; i <= n; i += 2){
        console.log(Math.pow(2, i));
    }
}
// i = 0 --> 2^0 (dva na nulti)
// i = 2 --> 2^2 (dva na drugi) ...

solve(7);
