// Sorting Strings

const names = ["Ansar", "zubair", "shoaib", "mathin", "Fahed"];
// names.sort();
// names.reverse();
// console.log(names);

// sorting numbers

const numbers = [20, 30, 40, 50, 80, 100, 10, 40];
// numbers.sort();
// numbers.reverse();

// First numbers will be deducted and then Sorting will be taking place

// numbers.sort((a, b) => b - a);
// numbers.reverse();
// console.log(numbers);

// Sorting Objects

const players = [
  { player: "ansar", score: 10 },
  { player: "ahmed", score: 20 },
  { player: "asrar", score: 80 },
  { player: "abdul", score: 5 },
  { player: "shoaib", score: 50 },
];

players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});
players.reverse();
console.log(players);

// Different Method Of Sort

players.sort((a, b) => b.score - a.score);
console.log(players);
