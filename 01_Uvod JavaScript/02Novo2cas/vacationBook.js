


function calculate(currentPages, pagesPerHour, days){
    let hoursPerDay = pagesPerHour * days;
    let hours = currentPages/hoursPerDay;
    console.log(hours);
}

calculate(432, 15, 4);
