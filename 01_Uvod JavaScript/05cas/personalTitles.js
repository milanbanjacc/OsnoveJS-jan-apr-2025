


function solve(age, gender){
    age = Number(age);  // ako je uneto "20" pod navodnicma, pretvorio bi u br

    if (gender == "m"){
        if (age < 16){
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else {
        if (age < 16){
            console.log("Miss");
        } else {
            console.log("Mrs.");
        }
    }
}

solve(15, "f");
solve(40, "m");

