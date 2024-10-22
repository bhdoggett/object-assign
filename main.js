const compose = function (target, ...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "object") {
      for (const key in numbers[i]) {
        target[key] = numbers[i][key];
      }
    } else {
      console.log(`Error: ${numbers[i]} is not an object`);
    }
  }

  return target;
};

const target = { d: 5, e: 10, f: 22 };
const source1 = { d: 7, g: 18 };
const source2 = { h: 6, i: 72, j: 89, l: 3456 };
const source3 = { m: 345, o: 36 };

const returnedTarget = compose(target, source1, source2, source3, 34);

console.log(target); // {d: 7, e: 10, f: 22, g: 18, h: 6, i: 72, j: 89, l: 3456, m: 345, o: 36}
console.log(returnedTarget === target); // true

