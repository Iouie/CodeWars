/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.
*/

//Answer//

function sumCubes(n){
let sum = 0;
for(let i = 1; i <= n; i++){
   sum += Math.pow(i, 3)
}
return sum
}
