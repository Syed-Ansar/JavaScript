const Prices = [20, 10, 30, 35, 15, 40, 80, 5];
// console.log(Prices);
// const Scaleprices = Prices.map((price) => price / 2);
// console.log(Scaleprices);

const products = [
  { name: "Gold Star", price: 10 },
  { name: "Gold Drop", price: 100 },
  { name: "Mashroom", price: 40 },
  { name: "Tomato", price: 60 },
  { name: "Ladies Finger", price: 20 },
  { name: "Potato", price: 12 },
];
let amount = 15;
const saleProducts = products.map((product) => {
  if (product.price > `${amount}`) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(saleProducts);
