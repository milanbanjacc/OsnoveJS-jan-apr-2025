

function solve(day){
    if (day === "Monday" || day === "Tuesday" || day === "Friday"){
        console.log(12);
    } else if (day === "Wednesday" || day === "Thursday"){
        console.log(14);
    } else if (day === "Saturday" || day === "Sunday"){
        console.log(16);
    } else {
        console.log("error");
    }
}

solve("Monday");
solve("Sunday");
solve("Subota");
