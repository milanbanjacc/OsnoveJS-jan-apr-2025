

function solve(input){
    let index = 0;
    // uzimamo ukupan br losih ocena iz niza
    let lowGrade = Number(input[index]); // prvi element iz niza
    index++; // idemo dalje sa nizom
    // uzimamo prvi zadatak, ili "Enough"
    let command = input[index]; // sad je to vec druga pozicija u nizu
    index++;

    // sada inicijalizacija svih promenljivih potrebnih
    let sumGrades = 0; // suma svih ocena
    let counter = 0; // brojac za zadatke
    let lastTask = ""; // naziv poslednjeg trenutnog zadatka, moracemo da je azuriramo sa svakom iteracijom posle
    let countLowGrades = 0; // brojac losih ocena

    // petlja dok ne dodjemo do "Enough"
    while (command !== "Enough"){
        // uzimamo ime trenutnog zadatka u novu promenljivu
        let currentTask = command;
        let currentGrade = Number(input[index]); // trenutni indeks odozgo se nalazi vec na poziciji ocene

        // proveravamo da li je trenutna ocena losa
        if (currentGrade <= 4){
            countLowGrades++; // povecavamo brojac za lose ocene
        } 

        // proveravamo da li smo dostigli maksimalan br losih ocena
        if (countLowGrades === lowGrade){
            console.log(`You need a break, ${lowGrade} poor grades.`);
            break;
        }

        sumGrades += currentGrade; // dodajemo trenutnu ocenu na sumu svih ocena

        // sada povecavamo brojac zadataka
        counter++;
        // cuvamo vrednost poslednjeg zadatka
        lastTask = currentTask;
        // povecavamo indeks kako bismo uzeli sl zadatak
        index++;
        // uzimamo sl komandu
        command = input[index];
        // povecavamo index jos jednom da biso dosli do sl ocene
        index++;
    }

    //racunamo prosecnu ocenu
    let avg = sumGrades / counter;

    // ako nismo dostigli maksimalan br losih ocena, ispisujemo poruku
    if (countLowGrades !== lowGrade){
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}


solve([3,"Money",6,"Story",4,"Spring Time",5,"Bus",6,"Enough"]);

solve([2,"Income",3,"Game Info",6,"Best Player",4]);
