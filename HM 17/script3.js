function max() {
  let maxNumber = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > maxNumber) {
      maxNumber = arguments[i];
    }
  }
  return maxNumber;
}
