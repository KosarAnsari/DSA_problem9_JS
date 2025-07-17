//Recursion function
//

let counter = 1;
function Rec(number){
    if(counter > number){
        return;
    }
    console.log("Recursion function");
    counter++;
    Rec(number); // Recursion function
}

Rec(10);