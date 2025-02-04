


function solve(input){
    let index = 0;
    // br clanova zirija
    let numMember = Number(input[index++]); // povecavamo index

    // komanda ili naziv prezentacije
    let command = input[index++];

    // suma svih ocena za prezentacije
    let sumGrade = 0;
    //konacna ocena svih suma za sve prezentacije
    let finalGrade = 0;
    // brojac svih ocena
    let counter = 0;

    while (command != "Finish"){
        // naziv trenutne prezentacije
        let namePresentation = command;
        // resetujemo sumu ocena za trenutnu prezentaciju
        sumGrade = 0;

        // prikupljamo ocene za trenutnu prezentaciju
        for (let i = 0; i < numMember; i++){
            let grade = Number(input[index++]); // trenutna ocena i opet povecavamo index
            sumGrade += grade; // dodajemo ocenu u sumu svih ocena
            counter++;
        }

        // ispisujemo prosecnu ocenu za trenutnu prezentaciju
        console.log(`${namePresentation} - ${(sumGrade / numMember).toFixed(2)}.`);

        // dodajemo ocenu u sumu za konacnu ocenu
        finalGrade += sumGrade;
        // citamo sl komandu ili naziv prezentacije
        command = input[index++];
    }

    // na kraju ispisujemo konacnu ocenu za sve prezentacije
    console.log(`Student's final assessment is ${(finalGrade / counter).toFixed(2)}.`);
}

solve([2,"While-Loop",6.00,5.50,"For-Loop",5.84,5.66,"Finish"]);

    