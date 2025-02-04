

function solve(input){
    let index = 0;
    // uzimamo koliko joj je novca potrebno da bi otisla na odmor
    let needMoney = Number(input[index]);
    index++;
    // koliko joj je novca trenutno dostupno na racunu
    let money = Number(input[index]);
    index++;

    // brojimo ukupne dane i dane kada je uzastopno trosila novac
    let dayCounter = 0;
    let spendCounter = 0;

    // petlja koja ce se ponavljati sve dok ne skupimo novac za odmor
    while (money < needMoney){
        // povecavamo brojac za dane
        dayCounter++;
        // uzimamo tip akcije - spend/save
        let action = input[index];
        index++;
        let realMoney = Number(input[index]);
        index++;

        if (action === "spend"){
            money -= realMoney;
            // proveravamo da li je money manji od 0
            if (money < 0){
                money = 0;
            } 
            // povecavamo brojac za uzastopne dane novca
            spendCounter++;
        } else {
            // ako je akcija bila save dodajemo novac
            money += realMoney;
            // uzastopno trosenje postavljamo na 0, jer sa cuvanjem novca se prekida taj niz
            spendCounter = 0;
        }

        // ako smo trosili pet dana za redom dobijamo sl poruku
        if (spendCounter === 5){
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            break;
        }
    }

    // ukoliko je skupila potreban novac za odmor
    if (money >= needMoney){
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}



solve([2000,1000,"spend",1200,"save",2000]);
    