

function calculate(budget, people, pricePerClothes){
    // racunamo cenu scenografije kao 10% budzeta
    let scenery = budget * 0.1;

    // racunamo ukupnu vrednost odece za statiste
    let price = people * pricePerClothes;

    // ukoliko imamo vise od 150 statista, dobijamo 10% na odecu
    if (people > 150){
        price = price * 0.9;
    }

    // ukupni troskovi
    let total = price + scenery;

    if (total > budget){
        // troskovi su veci od budzeta, onda nema snimanja
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} USD more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} USD left.`);
    }
}

calculate(20000, 120, 55.5);

