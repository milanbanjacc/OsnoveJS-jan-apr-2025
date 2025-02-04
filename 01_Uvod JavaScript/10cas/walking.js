

function solve(input){
    // cilj je 10.000 koraka dnevno
    let target = 10000;
    // inicijalizujemo brojac za interaciju kroz niz
    let i = 0;
    //inicijalizujemo promenljivu za brojanje koraka
    let steps = 0;

    // petlja ce se izvrsavati dokle god u nizu ima elemenata
    while (input[i]){
        // proveravamo da li smo dobili "Going home"
        if (input[i] === "Going home"){
            // sabiramo korake sa jos postojecom vrednoscu
            steps += Number(input[i + 1]);
            // ema je stigla kuci i prekidamo petlju
            break;
        }

        // dodajemo br koraka
        steps += Number(input[i]);
        // proveramo da li je ona dostigla cilj
        if (steps >= 10000){
            break;
        }

        // povecavamo indeks za sledeci element u nizu, tj sledeci korak
        i++;
    }

    // proveravamo da li je postigla cilj ili nije
    if (steps >= target){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - target} steps over the goal!`);
    } else {
        console.log(`${target - steps} more steps to reach goal.`);
    }
}


solve([1000,1500,2000,6500]);
