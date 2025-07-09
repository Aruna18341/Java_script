const afternoon = (a,b) => {
    console.log(a-b);
}
afternoon(5,3);

function one(){
    let X = 10;
    let Y = 20;
    let Z = X-Y;
    console.log(X,"subtraction is :",Z);
}
one();

let two = (a,b) =>{
let c = a-b;
console.log(c);    
}
two();

two(1,2);
two(5,20);
two(1,11);
two();

console.log("\n");
var three = (a = null, b = 20) =>{
    var c =a-b;
    console.log( a,b, "the subtraction is :",c);

}

three(5,20);
three(8);
three();