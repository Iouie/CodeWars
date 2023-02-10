/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
*/

//Answer//

function multipleOfIndex(array) {
  return array.filter((el, i) => el % i === 0)
}
