// 4.1
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const namesArray = users1.map((user) => user.name);
console.log(namesArray);

// 4.2
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const modifiedNamesArray = users2.map((user) => {
  if (user.name.startsWith("A")) {
    return "Anacleto";
  }
  return user.name;
});

console.log(modifiedNamesArray);

// 4.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedCitiesArray = cities.map((city) => {
  return city.isVisited ? city.name + " (Visitado)" : city.name;
});

console.log(visitedCitiesArray);
