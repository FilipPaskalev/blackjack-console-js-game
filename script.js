const gameSettings = {
  // Suits
  suits: ["♣", "♦", "♥", "♠"],
  // Face of cards
  ranks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  // Number of decks
  numberOfDecks: 8,
};

// Generate a deck of cards
function generateDeck(suits, ranks, numberOfDecks) {
  var deck = [];

  for (var i = 0; i < numberOfDecks; i++) {
    for (var suit of suits) {
      for (var rank of ranks) {
        deck.push(`${rank}${suit}`);
      }
    }
  }

  return deck;
}

// Generate deck with all card
var deck = generateDeck(
  gameSettings.suits,
  gameSettings.ranks,
  gameSettings.numberOfDecks
);

function shuffleDeck(deck) {
  var shuffledDeck = [...deck];

  for (var i = shuffledDeck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
}

var shuffledDeck = shuffleDeck(deck);
console.log("🚀 ~ file: script.js:45 ~ shuffledDeck:", shuffledDeck);
