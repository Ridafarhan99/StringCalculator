// function add(numbers) {
//   if (numbers === "") return 0;
//   return 0;
// }

// function add(numbers) {
//   if (numbers === "") return 0;
//   const nums = numbers.split(",").map(Number);
//   return nums.reduce((sum, num) => sum + num, 0);
// }

function add(numbers) {
  if (numbers === "") return 0;
  const nums = numbers.split(/,|\n/).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
