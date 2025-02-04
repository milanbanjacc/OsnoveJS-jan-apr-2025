

function calculate(nylon, paint, thinner, hours){
    // ukupan trosak materijala
    // dodajemo 2 kvadratna metra na najlon
    // dodajemo 10 posto na farbu
    // 0.40 za kesu
    // paint dodajemo 10 posto zato mnozimo sa 1.1
    let total = (nylon + 2) * 1.50 + paint * 1.1 * 14.5 + thinner * 5 + 0.4;
    //jedan sat rada je 30 posto ukupnih troskova
    let sumOfExpenses = 0.3 * total * hours + total;
    console.log(sumOfExpenses);
}

calculate(10, 11, 4, 8);
