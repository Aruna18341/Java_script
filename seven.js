const afternoon = (a,b) => {
    console.log(a+b);
}
afternoon(2,3);

function one(){
    let X = 100;
    let Y = 200;
    let Z = X+Y;
    console.log(X,"addition is :",Z);
}
one();

let two = (a,b) =>{
let c = a+b;
console.log(c);    
}
two();

two(10,20);
two(5,20);
two(10,11);
two();

console.log("\n");
var three = (a = null, b = null) =>{
    var c =a+b;
    console.log( a,b, "the addition is :",c);

}

three(10,20);
three(10);
three();