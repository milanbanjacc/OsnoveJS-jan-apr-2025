

function calculate(degrees, time){
    degrees = Number(degrees);

    time = time.toLowerCase(); // Morning --> morning ili bi pretvorio MORNING --> morning!

    let outfit;
    let shoes;

    if (time === "morning"){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (time === "afternoon"){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24){
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 25){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (time === "evening"){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

calculate(16, "Morning");
calculate(22,
    "Afternoon");
calculate(28,
    "Evening");
