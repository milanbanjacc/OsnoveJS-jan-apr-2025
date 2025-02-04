

function calculate(sec1, sec2, sec3){
    // prvo pretvaramo sekunde u minute
    let minutes = (sec1 + sec2 + sec3) / 60;
    // potrebno nam je da zaokruzimo br na nizi
    // trebaju nam samo minuti bez ostatka
    let totalMinutes = Math.floor(minutes);

    // ukupan br sekundi
    let totalSec = sec1 + sec2 + sec3;
    // racunamo preostale sekunde nakon sto su minuti izdvojeni
    let sec = totalSec % 60;

    // ako su sekunde manje ili jednake sa 9, dodaje se vodeca 0
    if (sec <= 9){
        console.log(`${totalMinutes}:0${sec}`);
    } else {
        console.log(`${totalMinutes}:${sec}`);
    }
}

calculate(35, 45, 44);
