/*
    The Fisher–Yates algorithm (a.k.a. Knuth shuffle) shuffles an array 
    to produce a uniform random permutation.

    At step i, it picks a random index j from 0 to i and places that 
    random element into position i. Once position i is set, it never changes again.
    
    Time: O(n) 
    Space: O(1)
*/

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const deck = [];
for (const suit of suits) {
    for (const rank of ranks) {
        deck.push({ suit, rank });
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let randomPosition = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomPosition]] = [array[randomPosition], array[i]];
    }
}

const before = deck.map(c => c.rank + " " + c.suit).join(" ; ");
shuffle(deck);
const after = deck.map(c => c.rank + " " + c.suit).join(" ; ");

console.log(`Before: \n\n${before}`);
console.log(`After: \n\n${after}`);