function calculate(chicken, fish, vege){
    // svi narucuju desert i on iznosi 20 posto ukupne cene racuna
    // ukupna suma za sve menije
    // cena menu 10.35, fish meny 12.40, vege meny 8.15
    let sum = chicken * 10.35 + fish * 12.40 + vege * 8.15;
    // racunamo zatim cenu deserta
    let desert = sum * 0.2;
    // dodati cenu dostave 2.5
    let total = sum + desert + 2.5;
    console.log(total);
}

calculate(2, 4, 3);
