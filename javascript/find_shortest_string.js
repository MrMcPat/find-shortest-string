function findShortestString(arr) {
  // type your code here

  for (let i = 0; i < arr.length; i++) {
    let num = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].length < arr[num].length) {
        num = j
      }
    } if (num != i) {
      let temp = arr[i]
      arr[i] = arr[num]
      arr[num] = temp
    }
  }
  return arr[0]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
