function one () {
    let sum = 0;
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log("the total arguments:", sum);
    console.log("________");
}
one(10,20,30);


function two () {
    let sum = 0;
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log("the total arguments:", sum);
    console.log("________");
}
two(10, 20);


function three () {
    let sum = 0;
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log("the total arguments:", sum);
    console.log("________");
}
three(1, 2, 3,4,5);


function four () {
    let sum = 0;
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log("the total arguments:", sum);
    console.log("________");
}
four();

function five () {
    let sum = 0;
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log("the total arguments:", sum);
    console.log("________");
}
five(100, 200, 300);


function six () {
    let result = "";
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        result += arguments[i];
    }
    console.log("concatenated string:", result);
    console.log("________");
}
six("Hello");

function seven () {
    let result = "";
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        result += arguments[i];
    }
    console.log("concatenated string:", result);
    console.log("________");
}
seven("Hello", " ", "World");


function eight () {
    let result = "";
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        result += arguments[i];
    }
    console.log("concatenated string:", result);
    console.log("________");
}
eight("nanditha");

function nine () {
    let result = "";
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        result += arguments[i];
    }
    console.log("concatenated string:", result);
    console.log("________");
}
nine("Good Night");


function ten () {
    let result = "";
    console.log("the total arguments:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        result += arguments[i];
    }
    console.log("concatenated string:", result);
    console.log("________");
}
ten("mohan");