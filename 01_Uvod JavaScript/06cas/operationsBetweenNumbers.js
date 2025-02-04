

function calculate(n1, n2, operator){
    n1 = Number(n1);
    n2 = Number(n2);

    let result = 0;
    let typeOfResult = "";

    if ( operator === "+"){
        result = n1 + n2;
        if (result % 2 === 0){
            typeOfResult = "even";
        } else {
            typeOfResult = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${typeOfResult}`);
    } else if (operator === "-"){
        result = n1 - n2;
        if (result % 2 === 0){
            typeOfResult = "even";
        } else {
            typeOfResult = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${typeOfResult}`);
    } else if (operator === "*"){
        result = n1 * n2;
        if (result % 2 === 0){
            typeOfResult = "even";
        } else {
            typeOfResult = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${typeOfResult}`);
    } else if ((operator === "/" || operator === "%") && n2 === 0){
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator === "/"){
        result = n1 / n2;
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    } else if (operator === "%"){
        result = n1 % n2;
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    }
}

calculate(11, 10, "%");
