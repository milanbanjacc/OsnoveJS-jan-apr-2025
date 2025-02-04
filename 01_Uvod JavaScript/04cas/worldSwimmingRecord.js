

function calculate(seconds, meters, secPerMeter){
    // ukupno vreme potrebno za plivanje
    let toSwim = meters * secPerMeter;

    // racunamo koliko puta cega voda usporiti
    // na svakih 15m voda usporava
    // zaokruziti na manji br
    let slower = Math.floor(meters / 15);

    // racunamo ukupno vreme koje ce voda dodati zbog otpora
    slower = slower * 12.5;

    // racunamo ukupno vreme usporavanja
    let sumTime = toSwim + slower;

    //racunamo razliku izmedju vremena koje mu je bilo potrebno i rekord
    let diff = Math.abs(sumTime - seconds);

    // proveravamo da li je uspeo da obori svetski rekord
    if (sumTime < seconds){
        console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

calculate(10464, 1500, 20);

