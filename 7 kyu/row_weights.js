/*
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
*/

//Answer//

function rowWeights(array){
  let sumL = 0 , sumR = 0;
  
  array.forEach((num, index) =>{
    if(index % 2 === 0){sumL += num}
    else sumR += num
  })
  return [sumL, sumR]
}
