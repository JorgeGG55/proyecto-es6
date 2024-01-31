function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const resultArray = swap(fantasticFour, 1, 3);
console.log(resultArray);
