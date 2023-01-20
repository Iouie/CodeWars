/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
*/

//Answer//
  // Implement me
  if(name.charAt(0) === 'r' || name.charAt(0) === 'R'){
  return name + " plays banjo";
    }
  else return name + ' does not play banjo';
}
