

function solve(arr){
    // prvi element u nizu je ukupan broj grupa
    let number = Number(arr[0]);

    // inicijalizacija svih planinskih vrhova
    let makalu = 0;
    let montBlack = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    // ukupan broj nam treba kasnije za procente
    let totalNumber = 0;

    // prolazimo kroz grupe planinara
    // krecemo od prvog indeksa (i = 1), zato sto je prvi indeks rezervisan za broj grupa
    for (let i = 1; i < arr.length; i++){
        // pravimo promenljivu za broj planinara u trenutnoj grupi
        let climbers = Number(arr[i]);
        // sada dodajemo broj planinara trenutne grupe u ukupan broj planinara
        totalNumber += climbers;
        // provera za broj planinara u grupi
        if (climbers <= 5){
            makalu += climbers;
        } else if (climbers >= 6 && climbers <= 12){
            montBlack += climbers;
        } else if (climbers >= 13 && climbers <= 25){
            kilimanjaro += climbers;
        } else if (climbers >= 26 && climbers <= 40){
            k2 += climbers;
        } else if (climbers >= 41){
            everest += climbers;
        }
    }


    // racunanje procenata i ispisivanje
    console.log(`${((makalu / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((montBlack / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalNumber) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalNumber) * 100).toFixed(2)}%`);
}

solve([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
