/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//Answer//

function XO(str) {
  let numO = 0, numX = 0;
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'x') {numX++}
    else if(str[i] === 'o') {numO++}
    else continue
  }
  console.log(numX, numO)
  return numX == numO ? true : false
}
