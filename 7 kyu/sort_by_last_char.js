/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

//Answer//

function last(x){
  return x.split(' ').sort(function(a,b){
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
    return -1;
  }
  if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
    return 1;
  }
  return 0;
  })
              
}
