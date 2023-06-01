console.log("===========| For Loop |===============");
var arr = ["Kaka","Jing","Rithy","Seth","Jon"]; // Array String
for(var i = 0; i < arr.length ; i++){
    console.log("Array ["+ i +"] : "+arr[i]);
}
console.log("===========| While Loop |===============");
var i=0;
while(i<arr.length){
    console.log("Array ["+ i +"] : "+arr[i]);
    i++;
}
console.log("===========| do While Loop |===============");
var i=0;
do{
    console.log("Array ["+ i +"] : "+arr[i]);
    i++;
}while(i<arr.length);

console.log("===========| For in Loop |===============");
for(var i in arr){
    console.log(arr[i]);
}
console.log("===========| For of Loop |===============");
for(var i  of arr){
    console.log(i);
}
console.log("===========| Map Loop |===============");
arr.map((items,index) => {
    console.log(index + "   " + items);
})
console.log("===========| ForEach Loop |===============");
arr.forEach(items => {
    console.log(items)
})