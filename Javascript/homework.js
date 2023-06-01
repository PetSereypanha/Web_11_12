const i = require("prompt-sync");

let ID = parseInt(i("Input ID   :"));
let Name = i("Input Name    :");
let Sex = i("Input Sex    :");
let Salary = parseFloat(i("Input Salary :"));
let Position = i("Input Position :") ;
var Bonus;
if(Position == "Manager"){
    Bonus = 20;
}else if(Position == "Acounting"){
    Bonus = 15;
}else if(Position == "IT"){
    Bonus = 25;
}else{
    Bonus = 10;
}
let Income = Salary + (Salary*Bonus)/100;
console.log("Output  ID       :"+ID);
console.log("Output  Name     :"+Name);
console.log("Output  Sex      :"+Sex);
console.log("Output  Salary   :"+Salary);
console.log("Output  Position :"+Position);
console.log("Output  Bonus    :"+Bonus);
console.log("Output  Income   :"+Income);