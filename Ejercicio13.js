function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

const exampleArray1 = ["apple", "banana", "cherry", "date"];
console.log(removeItem(exampleArray1, "banana"));

const exampleArray2 = ["cat", "dog", "elephant", "fish"];
console.log(removeItem(exampleArray2, "elephant"));

const exampleArray3 = ["red", "green", "blue", "yellow"];
console.log(removeItem(exampleArray3, "orange"));

console.log(exampleArray1);
console.log(exampleArray2);
console.log(exampleArray3);
