function rollDice(numCaras) {
  const randomNumber = Math.random();

  const diceResult = Math.ceil(randomNumber * numCaras);

  return diceResult;
}

const result1 = rollDice(6);
console.log(`Resultado del dado: ${result1}`);

const result2 = rollDice(10);
console.log(`Resultado del dado: ${result2}`);
