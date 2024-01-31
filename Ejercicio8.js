// 8.1
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

const rpgGames = videogames.filter((game) => game.genders.includes("RPG"));

if (rpgGames.length > 0) {
  const averageScoreRPG =
    rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;
  console.log(averageScoreRPG);
} else {
  console.log("No se encontraron videojuegos del género RPG.");
}
