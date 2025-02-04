

function clock(){
    // inicijalizacija promenljive za sate
    let hours = 0;

    while (hours < 24){
        for (let min = 0; min < 60; min++){
            console.log(`${hours}:${min}}`);
        }
        hours++;
    }
}

clock();
