

function solve(input){
    let index = 0;
    // uzimamo naziv prvog filma iz niza
    let filmName = input[index++];

    // dalje brojaci za tipove karata
    let countStudent = 0;
    let countStandard = 0;
    let countKid = 0;

    // pravimo glavnu petlju koja se izvrsava sve dok ne dodje do "Finish"
    while (filmName != "Finish"){
        // citamo br slobodnih mesta u sali
        let freeSpace = Number(input[index++]);
        // brojac za trenutni br prodatih karata
        let counter = 0;
        // citamo prvi tip karte ili "End" komandu
        let command = input[index++];

        // petlja se izvrsava sve dok ne dobijemo komandu End
        while (command != "End"){
            let type = command; // tip karte

            // povecavamo odgovarajuci brojac u zavisnosti od tipa karte
            if (type === "student"){
                countStudent++;
            } else if (type === "standard"){
                countStandard++;
            } else if (type === "kid"){
                countKid++;
            }
            // povecavamo brojac prodatih karata
            counter++;

            //ako su sva mesta u sali popunjena, prekidamo petlju
            if (freeSpace === counter){
                break;
            }

            // citamo sl tip karte ili komandu
            command = input[index++];
        }

        // racunamo procenat popunjenosti sale za trenutni fil
        let percentage = (counter / freeSpace) * 100;
        // ispisujemo procenat popunjenosti sale
        console.log(`${filmName} - ${percentage.toFixed(2)}% full.`);

        // citamo sledeci film u nizu
        filmName = input[index++];
    }

    // kada dobijemo komandu Finish, racunamo ukupan br prodatih karata
    let allTickets = countStandard + countStudent + countKid;
    console.log(`Total tickets: ${allTickets}`);

    // ispisujemo procentualno koliko je prodato karata za svaku kategoriju
    console.log(`${(countStudent / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandard / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKid / allTickets * 100).toFixed(2)}% kids tickets.`);
    
}



solve(["Taxi",10,"standard","kid","student","student","standard","standard","End","Scary Movie",6,"student","student","student","student","student","student","Finish"]);

    