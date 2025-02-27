function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
*/
//0(n2)
/* 
  Add your pseudocode here
*/
/*  function hasTargetSum(array, target) {
for each i index 0 to length -1
for each j index from i + 1 to length
if i + j === target,
return true;
else 
return false
} //*
/*
I wasn't 100% sure but i new you could use a for loop with a nested loop and 
then add a conditional statement.
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
