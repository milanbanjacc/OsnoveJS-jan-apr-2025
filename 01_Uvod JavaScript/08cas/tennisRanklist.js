

function solve(arr){
    // br turnira na kojima ucestvuje
    let number = Number(arr[0]);
    // pocetni br poena
    let startPoints = Number(arr[1]);

    // ukupni poeni dobijeni za razlicite fazeturnira
    let endPointsW = 0;
    let endPointsF = 0;
    let endPointsSF = 0;

    // ukupni br turnira kada je pobedio
    let wins = 0;

    // prolazak kroz sve turnire i racunanje broja turnira
    for (let i = 2; i < arr.length; i++){
        if (arr[i] === "W"){
            endPointsW += 2000;
            wins++
        } else if (arr[i] === "F"){
            endPointsF += 1200;
        } else if (arr[i] === "SF"){
            endPointsSF += 720;
        }
    }

    // finalni poeni
    let finalPoints = startPoints + endPointsF + endPointsSF + endPointsW;

    // prosecan br poena
    let aweragePoints = (endPointsF + endPointsSF + endPointsW) / number;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(aweragePoints)}`);
    console.log(`${((wins / number) * 100).toFixed(2)}%`);
}


solve([5, 1400, 'F', 'SF', 'W', 'W', 'SF']);
