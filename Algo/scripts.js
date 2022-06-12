// Theme: Strings & Objects

/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
    Python: key in dict
*/


function frequencyTableBuilder(arr) {
    var object = {}
    arr.forEach(function(ele) {
        if (object.hasOwnProperty(ele)) {
            object[ele]++;
        } else {
            object[ele] = 1
        }
    });
    return object;
}

// frequencyTableBuilder(arr2)

/*****************************************************************************/

/*
    Reverse Word Order
  
    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
  */


function reverseString(str) {
    var temp = str.split(" ");
    var newString = temp.reverse().join(" ");
    return newString;
}






const arr1 = ["a", "a", "a"]
    // const expected1 = {
    //   a: 3,
    // }

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
    // const expected2 = {
    //   a: 2,
    //   b: 1,
    //   c: 3,
    //   B: 1,
    //   d: 1,
    // }

const arr3 = []
    // const expected3 = {}

console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))
const str1 = "This is a test";
// const expected1 = "test a is This";
const str2 = "Hello World !"
console.log(reverseString(str1))
console.log(reverseString(str2))