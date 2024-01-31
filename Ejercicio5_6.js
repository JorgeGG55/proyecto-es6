const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function filterStreamers(keyword) {
  const filteredStreamers = streamers
    .filter((streamer) =>
      streamer.name.toLowerCase().includes(keyword.toLowerCase())
    )
    .map((streamer) => streamer.name);

  console.log(filteredStreamers);
}
