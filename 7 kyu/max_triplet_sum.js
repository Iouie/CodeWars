/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
*/

//Answer//

function maxTriSum(numbers){
return [...new Set(numbers)].sort((a,b) => a-b).slice([...new Set(numbers)].length - 3).reduce((sum, val) => sum += val)
}
