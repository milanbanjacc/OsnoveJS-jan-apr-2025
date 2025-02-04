

function solve(input){
    let index = 0; // radi pracenja trenutne pozicije u nizu

    let inputLine = input[index++];
    // [index++] znaci da ce ovaj let ocitati trenutnu vrednost indeksa, ali ce ga povecati u narednom koriscenju

    while (inputLine !== "End"){
        let destination = inputLine; // da je ovaj let bio van while petlje, ne bismo mogli da ga menjamo u petlji
        let amount = Number(input[index++]);
        let budget = 0; // promenljiva za sav novac koji je sacuvala

        // pravimo petlju koja ce prolaziti kroz niz i cuvati novac
        while (budget < amount){
            budget += Number(input[index++]);
        }

        // kada skupi dovoljno novca, ispisujemo por
        console.log(`Going to ${destination}!`);

        // nastavljamo i uzimamo sl destinaciju ili komandu "End"
        inputLine = input[index++];
    }
}

solve(["Greece",1000,200,200,300,100,150,240,"Spain",1200,300,500,193,423,"End"]);

    