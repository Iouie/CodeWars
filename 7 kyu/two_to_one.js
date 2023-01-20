/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//Answer//
function longest(s1, s2) {
  let str = ''
 s1 = s1.split('').sort().join('')
 s2 = s2.split('').sort().join('')
  for(let i = 0;i < s1.length; i++){ 
    if(!str.includes(s1[i])){str += s1[i]}  
    }
    for(j = 0; j < s2.length; j++){    
      if(!str.includes(s2[j])){str += s2[j]}  
    }
  return str.split('').sort().join('')
}
