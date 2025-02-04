
// treba nam visina popusta i visina krajnje cene
// popust iznosi 18%

function gardening(meters){
    // racunamo cenu poseda
    // 7.61 je cena po kvadratu
    let price = Number(meters) * 7.61;
    // racunamo popust od 18%
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} USD.`);
    console.log(`The discount is: ${discount} USD.`);
}

gardening(50);


/* podsetnik: moraju se staviti viticaste zagrade za promenljive!
ukoliko kombinujemo ispis sa tekstom i promenljivama moramo staviti ``
jer ce "" registrovati kao ceo tekst! */

