

function solve(budget, season){
    budget = Number(budget);

    let destination = "";
    let type = "";
    let sum = 0;

    if (budget <= 100){
        destination = "Serbia"
        if (season === "summer"){
            sum = 0.3 * budget;
        } else {
            sum = 0.7 * budget;
            type = "Hotel";
        }
    } else if (budget > 100 && budget <= 1000){
        destination = "Balkans";
        if (season === "Summer"){
            sum = 0.4 * budget;
            type = "Camp";
        } else {
            sum = 0.8 * budget;
            type = "Hotel";
        }
    } else {
        destination = "Europe";
        sum = 0.9 * budget;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${sum.toFixed(2)}`);
}

solve(150, "summer");
