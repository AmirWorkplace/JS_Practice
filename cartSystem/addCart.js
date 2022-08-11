console.log('Exporting Modules :');

const shoppingCart = 10;
export const cart = [];

export const addToCart = function(product, quality){
  cart.push({ product, quality });
  let data = `${quality} ${product} are added to your Carts !`;
  console.log(data);
};

const totalPrice = 290 + '$';
const totalQuality = 25 + "Pcs";

export { totalPrice, totalQuality };
export default function (product, quality){
  cart.push({ product, quality });
  let data = `${quality} ${product} are added to your Carts !`;
  console.log(data);
};