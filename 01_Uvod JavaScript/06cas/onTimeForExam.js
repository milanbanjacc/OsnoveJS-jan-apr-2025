

function solve(examHour, examMin, arrivalHour, arrivalMin){
    examHour = Number(examHour);
    examMin = Number(examMin);
    arrivalHour = Number(arrivalHour);
    arrivalMin = Number(arrivalMin);

    // racunamo ukupno vreme ispita i dolazak u min

    let totalExamMin = examHour * 60 + examMin;
    let totalArrivalMin = arrivalHour * 60 + arrivalMin;

    // racunamo razliku izmedju vremena dolasa i pocetka ispita u min
    let diff = Math.abs(totalArrivalMin - totalExamMin);

    // racunamo razliku izmedju sata i minuta
    let hourDiff = Math.floor(diff / 60);
    let minDiff = diff % 60;

    // 13:5 --> 13:05
    if (minDiff === 0 || (minDiff < 10 && minDiff > 0)){
        minDiff = `0${minDiff}`;
    }

    // Na vreme
    if (totalArrivalMin === totalExamMin){
        console.log("ON time");
    } // kasnjenje do sat vremena
    else if (totalArrivalMin > totalExamMin && diff < 60){
        console.log("Late");
        console.log(`${minDiff} minutes after the start`);
    } else if (totalArrivalMin > totalExamMin && diff >= 60){
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if (diff <= 30){
        console.log("ON time");
        console.log(`${minDiff} minutes before the start`);
    } else if (diff > 30 && diff < 60){
        console.log("Early");
        console.log(`${minDiff} minutes before the start`);
    } else {
        console.log("Early");
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
}

solve(9,30,9,50);
