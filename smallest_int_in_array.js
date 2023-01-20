/*
Given an array of integers your solution should find the smallest integer.
*/

//Answer//

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for(let i = 0; i < args.length; i++){
      smallest = Math.min(smallest, args[i]);
    }
    return smallest
  }
}
