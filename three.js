function one(){
    console.log("The one is working");
}

var two = function(){
    console.log("The two is working");
}

var three = () =>{
    console.log("The three is working");
}

var four = () =>console.log("The four is working");

//above is defination and below is function calling
one();
two();
three();
four();


let A=5;
let C=A+B;
let B=10;
let D=A+B;
console.log(C);
console.log(D);