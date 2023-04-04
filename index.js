const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
function divide(a, b) {
  return a / b;
}
function increment(a) {
  return a + 1;
}
function decrement(a) {
  return a - 1;
}

function makeInt(a) {
  return parseInt(a, 10);
}
makeInt("374");
makeInt("374.45");
makeInt("Gürkan");

function preserveDecimal(a) {
  return parseFloat(a);
}
preserveDecimal(23.003);
preserveDecimal("darn");
