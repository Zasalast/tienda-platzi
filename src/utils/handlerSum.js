const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  console.log('handleSumTotal');
  return sum;
};
export default handleSumTotal;
