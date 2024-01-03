const utils = {
  suits: ["♣", "♦", "♥", "♠"], // Suits
  ranks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"], // Face of cards
  maxNumberOfDecks: 8, // Maximum number of decks, default is 1
  maxNumberOfPlayers: 7, // Maximum number of players, default is 1
};

var players = [
  { name: "Player 1", hands: [], score: { wins: 0, losses: 0 } },
  { name: "Player 2", hands: [], score: { wins: 0, losses: 0 } },
  { name: "Player 3", hands: [], score: { wins: 0, losses: 0 } },
  { name: "Player 4", hands: [], score: { wins: 0, losses: 0 } },
  { name: "Player 5", hands: [], score: { wins: 0, losses: 0 } },
  { name: "Player 6", hands: [], score: { wins: 0, losses: 0 } },
  { name: "Player 7", hands: [], score: { wins: 0, losses: 0 } },
];

const engine = {
  numberOfPlayers: setPlayers(players[0]), // default is 1 player
};

var deck = {
  numberOfDecks: setNumberOfDecks(),
  cards: [],
};
// set how many players will be on table
function setPlayers() {
  // TODO finish the method
}

function setNumberOfDecks(decksNumber = 1) {
  // TODO finish the method
}

// Generate a deck of cards
function generateDeck(suits, ranks, numberOfDecks = 1) {
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

function shuffleDeck(deck) {
  var shuffledDeck = [...deck];

  for (var i = shuffledDeck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
}

// Generate deck with all card and shuffle it
