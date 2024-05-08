const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let addnums = addNums(increment);
  // Then, add timing code
  console.time(addnums);
  console.timeLog(addnums);
  console.timeEnd(addnums);
  Date.now(addnums);
}

function addManyNums10Timing(increment) {
  let addmanynums10 = addManyNums(increment);
  console.time(addmanynums10);
  console.timeLog(addmanynums10);
  console.timeEnd(addmanynums10);
  Date.now(addmanynums10);
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
