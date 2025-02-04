

function solve(arr){
    // prvo promenljiva za indeks na kome se trenutno nalazimo
    // posebno znaci za for petlju ako povlacimo neke druge pozicije iz niza
    // jer su prva dva u nizu rezervisana
     let index = 0; // prvi element u nizu
     // citamo br otvorenih kartica
     let openTab = Number(arr[index]);  // uzimamo prvi br iz niza, pretvaramo ga u br i cuvamo u openTab
     index++; // [1] --> drugi element u nizu
     let salary = Number(arr[index]); // cuvamo visinu plate
     index++;
     // da li je plata pozitivna
     let isPositiveSalary = true;

     // petlja koja prolazi kroz sve otvorene tabove
     for (let i = 0; i < openTab; i++){
        let currentTab = arr[index];
        index++;  // opet povecavamo `index` da bismo dosli do narednog indeksa iz niza

        // proveravamo da li je otvoreni tab kaznjiv
        if (currentTab === "Facebook"){
            salary -= 150; // od trenutne plate oduzimamo ovu vrednost
        } else if (currentTab === "Instagram"){
            salary -= 100;
        } else if (currentTab === "Reddit"){
            salary -= 50;
        }

        // proveravamo da li je plata postala manja od 0
        // mora da ostane u okviru for petlje!
        if (salary <= 0){
            console.log("You have lost your salary.");
            isPositiveSalary = false;
            break;
        }
    }

    // proveravamo da li je plata pozitivna i ispisujemo preostalu platu
    if (isPositiveSalary){
        // ispisujemo platu kao ceo br
        console.log(salary.toFixed(0));
    }
}


solve([10,750, 
    'Facebook', 
    'Stackoverflow.com', 
    'Instagram', 
    'Facebook', 
    'Reddit', 
    'Facebook', 
    'Facebook'])