



  
        // let  arr  = [1,2,3,1,2,1,1,1,121,23,44,44,4,3];
        // let newarr = [...new Set(arr)];
        // console.log(newarr);


const cartWithDuplicates = [
"Apple",
"Apple",
"Chilli",
"Pine Apple",
"Strawberry",
];
const cartWithoutDuplicates = [];
for (let i = 0; i < cartWithDuplicates.length; i++) {
if (!cartWithoutDuplicates.includes(cartWithDuplicates[i])) {
     cartWithoutDuplicates.push(cartWithDuplicates[i]);
}
}
console.log(cartWithoutDuplicates);



