let myArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(myArr);
let minArr = Math.min.apply(Math, myArr);
console.log(Math.min.apply(Math, myArr)); // 15: -63 - min element of array
let maxArr = Math.max.apply(Math, myArr);
console.log(Math.max.apply(Math, myArr)); // 18: 76 - max element of array
// 1, 3, 5, 8, 10, 13, 15, 17, 19, 21

//negative elements
function getNegativeNumbers(myArr){
    return myArr.filter(function(value){
        return value < 0;
    })
}
console.log(getNegativeNumbers(myArr)); // 10 negative elements
let posArr = myArr.filter(n => n>0);
let oddArr = myArr.filter(n => n%2 && n>0);
console.log(oddArr);// 4 pos odd elems
let evenArr = myArr.filter(n => n%2 === 0 && n>0);
console.log(evenArr); // 10 pox even elems
let oddArrSum = oddArr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(oddArrSum); //146
let evenArrSum = evenArr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(evenArrSum); //292
let posArrProd = posArr.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(posArrProd); //996181249307443200
function getMaxOfArray(myArr) {
    return Math.max.apply(null, myArr);
}
console.log(getMaxOfArray(myArr));