

// kada bilo koji broj podelimo sa dva, a pri tome ostatak nakon deljenja ostane 0, onda je to paran br

function solve(num){
    if(num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

solve(6);
solve(7);
