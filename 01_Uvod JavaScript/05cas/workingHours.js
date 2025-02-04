

function solve(hours, day){
    hours = Number(hours);
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hours >= 10 && hours < 18){
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        default:
            console.log("closed");
            break;
    }
}

solve(15, "Friday");
solve(21, "Monday");
solve(12, "Sunday");
solve(12, "Petak");
