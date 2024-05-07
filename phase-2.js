const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let res = []
 for (let i = 1; i <= 10; i++) {
  res.push(addNums(i * increment))

 }
 return res
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment, count = 1, res = []) {

  if(count > 10) {
    return res
  }

   res.push(addManyNums(count * increment))


 return addManyNums10(increment, count + 1,  res)

}

module.exports = [addNums10, addManyNums10];
