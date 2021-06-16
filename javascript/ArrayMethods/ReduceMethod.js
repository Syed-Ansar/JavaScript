// const scores = [20, 30, 40, 50, 80, 100, 10, 40];

// const scoreTotal = scores.reduce((accumilator, current) => {
//   if (current > 30) {
//     accumilator++;
//   }
//   return accumilator;
// }, 0);
// console.log(scoreTotal);

const scores = [
  { player: "ansar", score: 10 },
  { player: "ahmed", score: 20 },
  { player: "asrar", score: 80 },
  { player: "abdul", score: 10 },
  { player: "shoaib", score: 50 },
  { player: "ansar", score: 10 },
  { player: "ansar", score: 0 },
  { player: "ansar", score: 20 },
  { player: "ahmed", score: 20 },
  { player: "asrar", score: 80 },
  { player: "abdul", score: 10 },
  { player: "shoaib", score: 50 },
  { player: "ansar", score: 10 },
  { player: "ansar", score: 0 },
  { player: "ansar", score: 20 },
  { player: "ahmed", score: 20 },
  { player: "asrar", score: 0 },
  { player: "abdul", score: 10 },
  { player: "shoaib", score: 50 },
  { player: "ansar", score: 150 },
  { player: "ansar", score: 10 },
];

const ansarTotal = scores.reduce((acc, curr) => {
  if (curr.player === "ansar") {
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(ansarTotal);
