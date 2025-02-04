

/*
 For a studio, with more than 7 overnights in May and October: 5% discount.
 For a studio, with more than 14 overnights in May and October: 30% discount.
 For a studio, with more than 14 overnights in June and September: 20% discount.
 For an apartment, with more than 14 overnights, regardless of the month: 10% discount.
*/



function solve(month, days){
    days = Number(days);
    let priceSt = 0;
    let priceAp = 0;
    let discountPrice = 0;

    if (month === "May" || month === "October"){
        priceSt = 50 * days;
        priceAp = 65 * days;
    } else if (month === "June" || month === "September"){
        priceSt = 75.2 * days;
        priceAp = 68.7 * days;
    } else if (month === "July" || month === "August") {
        priceSt = 76 * days;
        priceAp = 77 * days;
    }

    if ((month === "May" || month === "October") && days > 7 && days < 14){
        priceSt = priceSt * 0.95;
    } else if ((month === "May" || month === "October") && days > 14){
        priceSt = priceSt * 0.7;
    } else if ((month === "June" || month === "September") && days > 14){
        priceSt = priceSt * 0.8;
    }

    if (days > 14){
        priceAp = priceAp * 0.9;
    }

    console.log(`Apartment: ${priceAp.toFixed(2)} USD.`);
    console.log(`Studio: ${priceSt.toFixed(2)} USD.`);
}

solve("December", 20);
solve("May", 39);



