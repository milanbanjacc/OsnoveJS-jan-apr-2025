

function calculate(price, puzzles, dolls, bears, minions, trucks){
    // racunamo ukupan br gracaka
    let toyCount = puzzles + dolls + bears + minions + trucks;

    // ukupan prihod od igracaka
    let toyPrice = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    // proveravamo da li je br igracaka veci od 50, ako jeste primenjujemo 20% popusta
    if(toyCount >= 50){
        toyPrice = toyPrice * 0.75; // -20% racunamo *0.75
    }

    // od ukupnog prihoda, treba da izdvojimo 10%
    toyPrice = toyPrice * 0.9;

    let diff = Math.abs(price - toyPrice);

    // proveravamo da li je zaradjen novac dovoljan za putovanje
    if (toyPrice >= price){
        console.log(`Yes! ${diff.toFixed(2)} USD left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} USD needed.`);
    }
}

calculate(40.8, 20, 25, 30, 50, 10);

