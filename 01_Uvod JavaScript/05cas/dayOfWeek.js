



function solve(day){
    // dan pretvaramo u br
    day = Number(day); // "5" bi pretvorio u br 5
    day = +day; // ista operacija!

    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}


solve(1);
solve(5);
solve(8);
