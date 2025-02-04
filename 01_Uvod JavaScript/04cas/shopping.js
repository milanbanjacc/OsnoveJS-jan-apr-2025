

function calculate(budget, videoCards, processors, ram){
    // ukupna cena video kartica
    let sumVideoCards = videoCards * 250;

    // racunamo cenu procesora - 35% cene video kartica
    let sumProcessors = sumVideoCards * 0.35 * processors;

    // racunamo cenu rama - 10% cene video kartica
    let sumRam = sumVideoCards * 0.1 * ram;

    // ukupna cena
    let total = sumVideoCards + sumProcessors + sumRam;

    // ako imamo vise video kartica dobijamo popust od 15%
    if (videoCards > processors){
        total = total * 0.85;
    }

    // proveravamo da li imamo dovoljno novca za kupovinu
    if (budget >= total){
        console.log(`You have ${(budget - total).toFixed(2)} USD left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} USD more!`);
    }
}

calculate(900, 2, 1, 3);

