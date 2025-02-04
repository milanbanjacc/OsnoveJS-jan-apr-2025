

function calculate(pages, pagesPerDay, days){
    // formula : sati dnevno = (ukupan br stranica / stranice po danu) / broj dana
    let result = pages / pagesPerDay / days;
    console.log(result);
}

calculate(432, 15, 4);
