

function calculate(screeningType, rows, cols){
    cols = Number(cols);
    rows = Number(rows);

    // cena svih karata u sali
    let price = 0;

    if (screeningType === "Premiere"){
        price = 12;
    } else if (screeningType === "Normal"){
        price = 7.5;
    } else if (screeningType === "Discount"){
        price = 5;
    }

    // ukupna cena za salu
    let totalIncome = price * cols * rows;

    console.log(`${totalIncome.toFixed(2)} USD.`);
}

calculate("Premiere", 10, 12);
