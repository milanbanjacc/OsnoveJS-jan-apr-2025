

function solve(input){
    // unos mozemo da pretvorimo u hiljaditi deo eura
    let change = input * 1000;
    // inicijalizacija brojaca za brojanje novcica
    let countCoins = 0;

    //petlja koja ce se izvrsavati dokle go unos change nije jednak nuli
    while (change > 0){
        // proveravamo da li je preostali iznos veci od 2 eura
        // oduzimamo od unosa u nastavku
        if (change >= 2000){
            change -= 2000;
        } else if (change >= 1000){
            change -= 1000;
        } else if (change >= 500){
            change -= 500;
        } else if (change >= 200){
            change -= 200;
        } else if (change >= 100){
            change -= 100;
        } else if (change >= 50){
            change -= 50;
        } else if (change >= 20){
            change -= 20;
        } else if (change >= 10){
            change -= 10;
        }

        // kada je uslov ispunjen recimo sa 2000, onda odmah izlazi iz if petlje na sledeci korak!

        // sada povecavamo br novcica koje smo iskoristili za razmenu
        countCoins++;
    }

    console.log(countCoins);
}



solve(1.23);
