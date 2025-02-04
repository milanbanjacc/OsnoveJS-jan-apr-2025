


function calculate(shape, a, b){
    if(shape === "square"){
        let area = a * a;
        console.log(area);
    } else if(shape === "rectangle"){
        let area = a * b;
        console.log(area);
    } else if (shape === "circle"){
        // pretpostavljamo da je korisnik uneo poluprecnik
        let r = a;
        let area = Math.PI * r * r;
        console.log(area);
    } else if(shape === "triangle"){
        // pretpostavljamo da je korisnik uneo b kao visinu
        let h = b;
        let area = (a * h / 2);
            console.log(area);
    }
}

calculate("rectangle", 7, 2.5);

