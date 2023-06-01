//     1. npm init
///    2. npm i prompt-sync

const i = require("prompt-sync")();

const id  = i("Input ID   :");
const name = i("Input Name :");
const qty  = parseInt(i("Input Qty  :"));
const price = parseFloat(i("Input Float :"));

var Total = price * qty;

console.log("\n Output  ID      :"+id);
console.log(" Output  Name     :"+name);
console.log(" Output  Qty      :"+qty);
console.log(" Output  Price    :"+price);
console.log(" Output  Payment  :"+Total+"$");