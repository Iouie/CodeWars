/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//Answer//
function accum(s) {
  let concat = "";
 for(let i = 0; i < s.length; i++){
   concat += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
   
 }

  return concat.slice(0, -1);
}
