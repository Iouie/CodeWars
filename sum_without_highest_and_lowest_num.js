/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
*/

//Answer//
function sumArray(array) {
  let sum = 0;
  if(array === null || array === undefined || array.length <= 2)
    {return 0}
  else{
      let biggestNum = array[0];
      let smallestNum = array[0];
    for(let i = 0; i < array.length; i++){
      sum += array[i];
      smallestNum = Math.min(array[i], smallestNum);
      biggestNum = Math.max(array[i], biggestNum);
    }
    console.log(array)
    sum = sum - smallestNum - biggestNum;
    return sum;
  }
}
