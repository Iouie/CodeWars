/*

Your task is to write function factorial.

*/

//Answer//

function factorial(n){
  let fact = 1;
  for(let i = n; i >= 1; i--){
    fact *= i
  }
  return fact
}
