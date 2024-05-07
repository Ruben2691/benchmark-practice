// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;
  for (let index = 0; index <= n; index++) {
    sum += index;
  }
  return sum;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let sum = 0;
  for (let index = 0; index <= n; index++) {
    sum += addNums(index);
  }
  return sum;
}

module.exports = [addNums, addManyNums];
