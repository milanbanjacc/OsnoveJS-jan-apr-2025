

function solve(arr){
    // lilina starost je prvi indeks u nizu [0], pravimo promenljive za sve u nastavku
    let age = arr[0];
    let priceLaundry = arr[1];  // cena masine za ves kao drugi element u nizu
    let priceToy = arr[2];  // cena igracke, treci element u nizu

    // sledeca promenljiva je za to koliko je brat uzimao novca, samo je inicijalizujemo
    let brotherCounter = 0;
    let moneyCounter = 0;  // brojac za novac
    let toyCounter = 0;    // brojac za kolicinu igracaka
    let arrMoney = [];    // cuvanje novca koji dobija za parne rodjendane, bice niz
    let savedMoney = 0;   // cuvanje ukupnog novca koji je skupila:


    // petlja koja prolazi kroz sve njene rodjendane
    for (let i = 1; i <= age; i++){  // krecemo od prvog rodjendana, zato je i=1
        // proveravamo da li je rodjendan bio paran
        if (i % 2 === 0){
            moneyCounter += 10;
            arrMoney.push(moneyCounter);
            brotherCounter++;
        } else {
            toyCounter++;
        }
    }

    // promenljiva za ukupan novac od prodatih igracaka:
    let recivedMoney = toyCounter * priceToy;

    // petlja za novac koji je dobila za parne rodjendane
    for (let i = 0; i < arrMoney.length; i++){
        savedMoney += arrMoney[i];  // !!!
    }

    // promenljiva za novac koji ona trenutno ima, treba nam za ispis
    let result = savedMoney + recivedMoney - brotherCounter;
    // promenljiva za preostali novac
    let yes = result - priceLaundry;
    // promenljiva za novac koji joj nedostaje ako nema dovoljno
    let no = priceLaundry - result;

    if (result >= priceLaundry){
        console.log(`Yes! ${yes.toFixed(2)}`);
    } else {
        console.log(`No! ${no.toFixed(2)}`);
    }

}



solve([21,1570.98,3]);
