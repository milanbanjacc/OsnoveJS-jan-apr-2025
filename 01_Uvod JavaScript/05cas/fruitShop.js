

function solve(fruit, day, quantity){
    quantity = Number(quantity);

    // treba da napravimo inicijalne cene za voce, jer necemo moci da im pristupimo van if-a ili switch-a!
    let banana = 0;
    let apple = 0;
    let orange = 0;
    let grapefruit = 0;
    let kiwi = 0;
    let pineapple = 0;
    let grapes = 0;

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            banana = 2.5;
            apple = 1.2;
            orange = 0.85;
            grapefruit = 1.45;
            kiwi = 2.70;
            pineapple = 5.5;
            grapes = 3.85;
            break;
        case "Saturday":
        case "Sunday":
            banana = 2.7;
            apple = 1.25;
            orange = 1.9;
            grapefruit = 1.6;
            kiwi = 3;
            pineapple = 5.6;
            grapes = 4.20;
            break;
        default:
            console.log("error");
            return;
    }

    switch(fruit){
        case "banana":
            console.log((banana * quantity).toFixed(2));
            break;
        case "apple":
            console.log((apple * quantity).toFixed(2));
            break;
        case "grapefruit":
            console.log((grapefruit * quantity).toFixed(2));
            break;
        case "kiwi":
            console.log((kiwi * quantity).toFixed(2));
            break;
        case "pineapple":
            console.log((pineapple * quantity).toFixed(2));
            break;
        case "pineapple":
            console.log((pineapple * quantity).toFixed(2));
            break;
        case "grapes":
            console.log((grapes * quantity).toFixed(2));
            break;
        default:
            console.log("error");
            break;
    }
}

solve("kiwi", "Sunday", 5);
