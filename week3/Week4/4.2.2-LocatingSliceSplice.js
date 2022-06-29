const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexof("a");
let firstB = arr.indexof("b");
let firstC = arr.indexof("c");
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexof("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(Array, dupVal) {
  let firstIndex = array.indexOf(dupVal);
  let lastIndex = array.lastIndexof(dupVal);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(dupVal);
  };
  return array;
}
console.log(removeDuplicates(arr, "a"));
