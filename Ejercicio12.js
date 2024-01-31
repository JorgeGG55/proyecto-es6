function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const indexLuke = findArrayIndex(mainCharacters, "Luke");
console.log("Index of Luke:", indexLuke);

const indexChewbacca = findArrayIndex(mainCharacters, "Chewbacca");
console.log("Index of Chewbacca:", indexChewbacca);

const indexYoda = findArrayIndex(mainCharacters, "Yoda");
console.log("Index of Yoda:", indexYoda);
