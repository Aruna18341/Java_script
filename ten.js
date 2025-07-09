function one (){
    let sum = 0;
    console.log("the total arguments:",arguments.length);

    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i]);
        sum+=arguments[i];
    }
    console.log("the total arguments:",sum);
    console.log("________");
}
one(20,30,40,50,60,70,80,90,100,110);
