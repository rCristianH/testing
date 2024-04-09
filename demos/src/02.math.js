function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  const out = a * b;
  if (out !== 0) {
    return out;
  }
  return 0;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

module.exports = {
  sum,
  multiply,
  divide,
};
