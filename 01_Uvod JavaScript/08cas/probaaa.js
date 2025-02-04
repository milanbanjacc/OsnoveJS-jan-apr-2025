


function solve(input){
    let totalGames = 0;
    let totalWins = 0;
    let totalLosses = 0;
    let i = 0;

    while (i < input.length){
        let tournamentName = input[i];

        if (tournamentName === "End of tournaments"){
            break;
        }
        i++;
        let numberOfGames = Number(input[i]);
        i++;

        for (let game = 1; game <= numberOfGames; game++){
            let darcyPoints = Number(input[i]);
            let opponentPoints = Number(input[i + 1]);
            i += 2;
            let pointDifference = Math.abs(darcyPoints - opponentPoints);

            if (darcyPoints > opponentPoints){
                console.log(`Game ${game} of tournament ${tournamentName}: win with ${pointDifference} points.`);
                totalWins++;
            } else {
                console.log(`Game ${game} of tournament ${tournamentName}: lost with ${pointDifference} points.`);
                totalLosses++;
            }
            totalGames++;
        }
    }
    let winPerc = (totalWins / totalGames) * 100;
    let lossPerc = (totalLosses / totalGames) * 100;
    console.log(`${winPerc.toFixed(2)}% matches win`);
    console.log(`${lossPerc.toFixed(2)}% matches lost`);
}


solve(["Dunkers",2,75,65,56,73,"Fire Girls",3,67,34,83,98,66,45,"End of tournaments"]);

    