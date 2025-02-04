
// na prezentaciji za ovo predavanje je i druga opcija kako da se resi

function solve(floors, rooms){
    // petlja koja prolazi kroz sve spratove, pocevsi od najviseg
    for(let floor = floors; floor > 0; floor--){
        // inicijalizacija promenljive koja ce se menjati u odnosu na sprat
        // A - apartman
        // O - kancelarija
        // L - najveci apartman
        let type = "";

        // proveravamo da li je trenutni sprat najvisi
        if (floor === floors){
            type = "L";
            // proveravamo da li je trenutni sprat neparan
        } else if (floor % 2 === 1){
            type = "A"
        } else {
            type = "O"
        }

        // pravimo promenljivu koja cuva info o trenutnom spratu
        let row = "";

        for (let room = 0; room < rooms; room++){
            row += `${type}${floor}${room} `;  // razmak na kraju ispisa!
        }

        console.log(row);
    }
}

solve(1,5);
