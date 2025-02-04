

function calculate(days, room, feedback){
    let price = 0;
    let night = days - 1;

    if (night < 10){
    switch(room){
        case "room for one person":
            price = night * 18.0;
            break;
        case "apartment":
            price = night * 25 * 0.7; // 30% popusta
            break;
        case "president apartmet":
            price = night * 35 * 0.9; // 10% popusta
            break;
        default:
            break;
        }
    } else if (night >= 10 && night <= 15){
    switch(room){
        case "room for one person":
                price = night * 18.0;
                break;
        case "apartment":
                price = night * 25 * 0.65;
                break;
        case "president apartmet":
                price = night * 35 * 0.85;
                break;
        default:
                break;
        }
    } else if (night > 15){
        switch(room){
        case "room for one person":
                price = night * 18.0;
                break;
        case "apartment":
                price = night * 25 * 0.5;
                break;
        case "president apartmet":
                price = night * 35 * 0.8;
                break;
        default:
                break;
        }
    }

    if (feedback === "positive"){
        price = price + price * 0.25;
    } else if (feedback === "negative"){
        price = price - price * 0.1;
    }

    console.log(price.toFixed(2));
}

calculate(14, "apartment", "positive");
