

// na trenutno vreme dodajemo 15 minuta

function calculate(hours, minutes){
    // racunamo ukupne minute od pocetka + 15 minuta
    let totalMinutes = hours * 60 + minutes + 15;
    let currentHours = 0;
    let currentMinutes = 0;

    // proveravamo da li su nam minuti veci od jednog sata
    if (totalMinutes / 60 !== 0){
        // trenutni sati
        // potrebno je da odstranimo ostatak decimala
        currentHours = Math.trunc(totalMinutes / 60);
        // ukupni minuti ce biti kao ostatak pri deljenju sa 60
        currentMinutes = totalMinutes % 60;

        if (currentHours > 23){
            currentHours = 0;
        }
    } // proveravamo da li je u pitanju ceo sat
    else if (totalMinutes / 60 === 0){
        currentHours = Math.trunc(minutes / 60);
        currentHours = 0;
    }

    //provera za dodavanje vodecih nula
    if(currentMinutes < 10){
        console.log(`${currentHours}:0${currentMinutes}`);
    } else {
        console.log(`${currentHours}:${currentMinutes}`);
    }
}

calculate(1, 46);
