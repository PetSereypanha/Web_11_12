function Log(){
    console.log("Hello");
}
Log();

function you(name="",gender=""){
    console.log("Name ="+name+"   Gender ="+gender)
}

you("Channa","male");
you("Channa",123);

function T(){
    return 3;
}

console.log(T());

function Sum(v = 0, b = 0){
    return v+b;
}

var total  = Sum(4,6) * Sum(8,9);

console.log(total);
