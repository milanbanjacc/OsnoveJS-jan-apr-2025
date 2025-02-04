

function solve(budget, season, fisherman){
    budget = Number(budget);
    fisherman = Number(fisherman);

    let price = 0;

    if (season === "Spring"){
        price = 3000;
    } else if (season === "Summer" || season === "Autumn"){
        price = 4200;
    } else {
        price = 2600;
    }

    let discount = 0;

    if (fisherman <= 6){
        discount = 10/100;
    } else if (fisherman >= 7 && fisherman <= 11){
        discount = 15/100;
    } else {
        discount = 25/100;
    }

    let totalPrice = price - price * discount;

    if (fisherman % 2 === 0 && season !== "Autumn"){
        totalPrice = totalPrice * 0.95;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice){
        console.log(`Yes! You have ${diff.toFixed(2)} USD left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} USD.`);
    }
}

solve(3000, "Summer", 11);
solve(3600, "Autumn", 6);
solve(2000, "Winter", 13);

