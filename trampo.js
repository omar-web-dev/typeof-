let first = 10;
let seccount = 20;
// console.log(first , seccount);

let trampo = first;
first = seccount;
seccount = trampo ;
console.log(first , seccount);

trampo = seccount;
// console.log(first , seccount);

[first, seccount] = [seccount, first]
// console.log(first , seccount);