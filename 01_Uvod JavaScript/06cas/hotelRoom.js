

function calculate(month, days){
    days = Number(days);

    let studio = 0;
    let app = 0;

    if (month === "May" || month === "October"){
        studio = 50 * days;
        app = 65 * days;
    } else if (month === "June" || month === "September"){
        studio = 75.20 * days;
        app = 68.7 * days;
    } else {
        studio = 76 * days;
        app = 77 * days;
    }

    if (days > 7 && days < 14 && (month ==="May" || month === "October")){
        studio = studio * 0.95;
    } else if (days > 14 && (month === "May" || month === "October")){
        studio = studio * 0.7;
    } else if (days > 14 && (month === "June" || month === "September")){
        studio = studio * 0.8;
    }

    if (days > 14){
        app = app * 0.9;
    }

    console.log(`Apartment: ${app.toFixed(2)} USD.`);
    console.log(`Studio: ${studio.toFixed(2)} USD.`);
}

calculate("May", 15);
