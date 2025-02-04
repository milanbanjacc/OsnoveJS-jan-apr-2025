

function solve(product, city, quantity){
    quantity = Number(quantity);

    let price = 0;

    if (city === "London"){
        switch(product){
            case "coffee":
                price = 0.5;
                break;
            case "water":
                price = 0.8;
                break;
            case "beer":
                price = 1.2;
                break;
            case "sweets":
                price = 1.45;
                break;
            case "peanuts":
                price = 1.6;
                break;
        }
    } else if (city === "Rome"){
        switch(product){
            case "coffee":
                price = 0.4;
                break;
            case "water":
                price = 0.7;
                break;
            case "beer":
                price = 1.15;
                break;
            case "sweets":
                price = 1.3;
                break;
            case "peanuts":
                price = 1.5;
                break;
        }
    } else if (city === "Paris"){
        switch(product){
            case "coffee":
                price = 0.45;
                break;
            case "water":
                price = 0.7;
                break;
            case "beer":
                price = 1.1;
                break;
            case "sweets":
                price = 1.35;
                break;
            case "peanuts":
                price = 1.55;
                break;
        }
    }

    let sum = price * quantity;
    console.log(sum);
}


solve("sweets", "London", 5);

