

function solve(arr){
    // ime glumca
    let actor = arr[0];
    // akademski poeni
    let academyPoints = Number(arr[1]);
    // broj ocenjivaca
    let assessors = Number(arr[2]);

    // duzina do koje ce se kreirati nasa petlj, kada budemo zeleli da prolazimo kroz ocenjivace
    // + 3 za tri indeksa iznad koji su vec rezervisani, jer krecemo sa ocenjivacima od cetvrtog indeksa na dalje
    // * 2 zato sto su posle imena svakog ocenjivaca dati bodovi u svakom sledecem indeksu
    let assessorsCount = assessors * 2 + 3; 
    // ukupni bodovi
    let finalPoints = 0;

    // krecemo petlju sa ocenjivacima ali od treceg indeksa!
    // i+=2 kao i iznad, u nizu ide prvo ime ocenjivaca pa br bodova
    // zato preskacemo uvek po dva polja da bismo opet dosli do imena i preskocili bodove
    for (let i = 3; i < assessorsCount; i+=2){
        // ime ocenjivaca
        let assessorsName = arr[i];
        // duzina imena
        let nameLength = assessorsName.length;
        // bodovi ocenjivaca
        let assessorsPoints = arr[i + 1];
        // racunanje ukupnih bodova ocenjivaca
        let points = (nameLength * assessorsPoints) / 2;
        // dodajemo ove poene u konacne poene
        finalPoints += points; // trenutnoj vrednosti finalnih poena se dodaje vrednos ovih poena
        
        // racunanje trenutnih ukupnih bodova
        let endValues = finalPoints + academyPoints;

        // proveravamo da li je ukupna vrednost bodova veca od 1250.5
        if (endValues > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${endValues.toFixed(1)}!`);
            break;
        }
    }

    // ponovo racunamo ukupne bodove
    let endValues = finalPoints + academyPoints;
    if (endValues <= 1250.5){
        console.log(`Sorry, ${actor} you need ${(1250.5 - endValues).toFixed(1)} more!`);
    }

}


solve(['Tom Hanks', 205, 4, 'Johhny Depp', 45, 'Will Smith', 29, 'Jet Lee', 10, 'Matthew McConaughey', 39]);
