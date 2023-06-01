console.log("===============| Object Array |==================");
var Person = [
    {
        id : 1,
        name : "Sok",
        gender : "male",
        salary : 2000
    },
    {
        id : 2,
        name : "Jon",
        gender : "male",
        salary : 4000
    },
    {
        id : 3,
        name : "Kaka",
        gender : "female",
        salary : 900
    },
    {
        id : 4,
        name : "jing",
        gender : "female",
        salary : 7000
    }
]

console.log(Person[0]);
console.log(Person[1].name);

console.log("=====================| For Loop |===================");
for(var i = 0; i< Person.length; i++){
    console.log("Person ID : "+ Person[i].id +"  Person Name : "+Person[i].name +"  Person Gender : "+Person[i].gender+"  Person Salary : "+Person[i].salary)
}
console.log("=====================| For Loop |===================");
Person.map((items,index) => {
    console.log(index + " " + items.id + " " + items.name + " " + items.gender +" "+items.salary)
})