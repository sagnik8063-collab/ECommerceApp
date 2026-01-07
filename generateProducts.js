const fs = require('fs');

const categories = [
  'Electronics',
  'Fashion',
  'Home',
  'Books',
  'Beauty',
  'Sports',
  'Toys'
];

const products = [];

for (let i = 1; i <= 10000; i++) {
  products.push({
    id: i.toString(),
    title: `Product ${i}`,
    price: Math.floor(Math.random() * 9000) + 999,
    category: categories[i % categories.length],
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: `https://picsum.photos/seed/${i}/300/300`,
    description: `This is a high quality Product ${i} suitable for everyday use.`,
    inStock: i % 5 !== 0
  });
}

fs.writeFileSync(
  'src/data/products.json',
  JSON.stringify(products, null, 2)
);
