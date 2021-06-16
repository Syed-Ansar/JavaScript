const scores = [10, 30, 40, 15, 50, 5, 6];

// const FilteredScores = scores.filter((score) => {
//   return score > 20;
// });
// console.log(FilteredScores);

const users = [
  { name: "Ansar", premium: false },
  { name: "Asrar", premium: false },
  { name: "Abdul", premium: false },
  { name: "Ahmed", premium: true },
  { name: "Razaak", premium: true },
  { name: "Amjad", premium: false },
];

// NotPremium Users

const NotPremiumUsers = users.filter((user) => !user.premium);
console.log(NotPremiumUsers);

// Premium Users

const PremiumUsers = users.filter((user) => user.premium);
console.log(PremiumUsers);
