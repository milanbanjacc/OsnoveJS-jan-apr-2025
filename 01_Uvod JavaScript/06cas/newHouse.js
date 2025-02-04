

function calculate(type, count, budget){
    count = Number(count);
    budget = Number(budget);

    let price = 0;

/*
Rose Dahlia Tulip Narcissus Gladiola
  5   3.80   2.80   3        2.50

 If Norah buys more than 80 Roses - 10% discount from the final price
 If Norah buys more than 90 Dahlias - 15% discount from the final price
 If Norah buys more than 80 Tulips - 15% discount on the final price
 If Norah buys less than 120 Narcissus - the price increases by 15%
 If Norah buys less than 80 Gladiolus - the price increases by 20%
*/

    if (type === "Roses"){
        price = count * 5;
        if (count > 80){
            price = price * 0.9;
        }
    } else if (type === "Dahlias"){
        price = count * 3.8;
        if (count > 90){
            price = price * 0.85;
        }
    } else if (type === "Tulips"){
        price = count * 2.80;
        if (count > 80){
            price = price * 0.85;
        }
    } else if (type === "Narcissus"){
        price = count * 3;
        if (count < 120){
            price = price + price * 0.15;
        }
    } else if (type === "Gladiolas"){
        price = count * 2.5;
        if (count < 80){
            price = price + price * 0.2;
        }
    }

    if (budget >= price){
        let left = budget - price;
        console.log(`Hey, you have a great garden with ${count} ${type} and ${left.toFixed(2)} USD left.`);
    } else {
        let need = price - budget;
        console.log(`Not enough money, you need ${need.toFixed(2)} USD more.`);
    }
}

calculate("Roses", 55, 250);
calculate("Tulips", 88, 260);
calculate("Narcissus", 119, 360);
