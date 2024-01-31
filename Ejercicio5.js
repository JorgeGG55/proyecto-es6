// 5.1
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const filteredAges1 = ages1.filter((age) => age > 18);
console.log(filteredAges1);

// 5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const filteredAges2 = ages2.filter((age) => age % 2 === 0);
console.log(filteredAges2);
// 5.3
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const filteredStreamers1 = streamers1.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log(filteredStreamers1);

// 5.4
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const filteredStreamers2 = streamers2.filter((streamer) =>
  streamer.name.includes("u")
);
console.log(filteredStreamers2);

// 5.5
const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const filteredStreamers3 = streamers3.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    streamer.gameMorePlayed =
      streamer.age > 35
        ? streamer.gameMorePlayed.toUpperCase()
        : streamer.gameMorePlayed;
    return true;
  }
  return false;
});
console.log(filteredStreamers3);
