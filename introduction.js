let results = [1, 2, 3, 4].map((number) => number * 2);
console.log(results);

const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
console.log(filter([1, 2, 3, 4, 5, 6], 2));

const actors = [
  {
    Name: "emma",
    net: "77777",
    Name: "emma",
    net: "77777",
    Name: "emma",
    net: "77777",
    Name: "emma",
    net: "77777",

    Name: "emma",
    net: "77777",
  },
];
console.log(actors.filter((actors) => actors.net > 10));
