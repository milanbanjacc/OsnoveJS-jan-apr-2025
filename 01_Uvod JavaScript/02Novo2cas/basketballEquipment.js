

function calculate(annualFee){
    // treba izracunati cenu patika koje kostaju 40 posto manje od godisnje clanarine
    let shoes = (annualFee * (100-40)) / 100;
    // izracunati cenu dresa 20 posto manje od patika
    let suit = (shoes * (100-20))/ 100;
    // izracunati cenu lopte koja je 1/4 cene dresa, koju mozemo napisati kao 0.25
    let basketball = suit * 0.25;
    // racunamo aksesoare koja je 1/5 cene kosarkaske lopte, ili 0.2
    let accesoar = basketball * 0.2;

    // koliko treba ukupno platiti
    let total = annualFee + shoes + suit + basketball + accesoar;
    console.log(total);
}


calculate(365);
