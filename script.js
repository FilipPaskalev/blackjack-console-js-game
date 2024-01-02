const gameSettings = {
  // Suits
  suits: ["♣", "♦", "♥", "♠"],
  // face of cards
  ranks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  // MAX numbers of decks that can be add
  maxDecks: 8,
  // MIN numbers of decks that can be add (default)
  minDecks: 1,
};

// Generate a deck of cards
function generateDeck(suits, ranks, numberOfDecks) {
  let deck = [];

  for (let i = 0; i < numberOfDecks; i++) {
    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push(`${rank}${suit}`);
      }
    }
  }

  return deck;
}

// Generate deck with all card
var deck = generateDeck(suits, ranks, maxDecks);
console.log("🚀 ~ file: script.js:41 ~ deck:", deck);
