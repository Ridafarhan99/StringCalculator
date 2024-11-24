// function add(numbers) {
//   if (numbers === "") return 0;
//   return 0;
// }

// function add(numbers) {
//   if (numbers === "") return 0;
//   const nums = numbers.split(",").map(Number);
//   return nums.reduce((sum, num) => sum + num, 0);
// }

// function add(numbers) {
//   if (numbers === "") return 0;
//   const nums = numbers.split(/,|\n/).map(Number);
//   return nums.reduce((sum, num) => sum + num, 0);
// }

// function add(numbers) {
//   if (numbers === "") return 0;

//   let delimiter = /,|\n/;
//   if (numbers.startsWith("//")) {
//     const parts = numbers.split("\n");
//     delimiter = new RegExp(parts[0].slice(2));
//     numbers = parts[1];
//   }

//   const nums = numbers.split(delimiter).map(Number);
//   return nums.reduce((sum, num) => sum + num, 0);
// }

function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
