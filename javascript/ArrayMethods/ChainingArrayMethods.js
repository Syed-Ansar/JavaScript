const products = [
  { name: "Gold Star", price: 10 },
  { name: "Gold Drop", price: 100 },
  { name: "Mashroom", price: 40 },
  { name: "Tomato", price: 60 },
  { name: "Ladies Finger", price: 20 },
  { name: "Potato", price: 12 },
];

// common methods to apply different array methods

// const filtered = products.filter((product) => product.price > 30);
// const promos = filtered.map(
//   (product) => `The ${product.name} is worth ${product.price / 2}`
// );
// console.log(promos);

// Chaining of Array methods

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `The ${product.name} is worth ${product.price / 2}`);

console.log(promos);
