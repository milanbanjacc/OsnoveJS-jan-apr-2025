

function calculate(name, episodeDuration, breakDuration){
    // 1/4 vremena pauze ide na jelo
    // 1/8 vremena pauze ide na odmor
    let lunch = breakDuration / 4;
    let rest = breakDuration / 8;

    // racunamo slobodno vreme za seriju
    let time = breakDuration - lunch - rest;

    // proveravamo da li imamo dovoljno vremena za gledanje epizode
    // vreme treba zaokruziti na veci br
    if (time >= episodeDuration){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(time - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - time)} more minutes.`);
    }
}

calculate("Game of Thrones", 60, 96);

