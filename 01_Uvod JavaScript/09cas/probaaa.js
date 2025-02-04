



function solve(arr){
    let i = 0;
    let ispis = [];

    while (true){
        let text = arr[i++];

        if (text === "Stop"){
            console.log(ispis);
            break;
        } else {
            ispis.push(text.length);
        }


    }
}


solve(["Smith","SoftUni","London","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);