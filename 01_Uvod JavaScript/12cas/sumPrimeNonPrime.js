

function solve(input){
    let index = 0;
    // suma prostih brojeva
    let primeSum = 0;
    // suma br koji nisu prosti
    let nonPrimeSum = 0;
    let currentInput = input[index++];

    while (currentInput != "stop"){
        let num = Number(currentInput);

        if (num < 0){
            // ispisujemo por da je br negativan
            console.log(`Number is negative.`);
            currentInput = input[index++];
            // nastavljamo dalje do sl interacije
            continue;
        }

        // ako je br 1, tretiramo ga kao da je prost
        if (num === 1){
            primeSum += 1;
            currentInput = input[index++];
            continue;
        }
        // dalje pretpostavljamo da je br prost
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0){
                isPrime = false;
                break;
            }
        }

        // ako je br prost, dodajemo ga sumi prostih, i obrnuto
        if (isPrime){
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }

        // prelazak na sl unos
        currentInput = input[index++];
    }

    // ispisujemo rezultate
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve([3,9,0,7,19,4,"stop"]);

    