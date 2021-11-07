const args = process.argv.slice(2);
if (args.length === 0) {
  return null;
}

let numbers = [];
numbers = args.filter(el => (Number(el) && Number(el) > 0));

if (numbers.length === 0) {
  return null;
}

numbers.sort((a, b) => {
  return a - b;
});

for (let i = 0; i < numbers.length; i++) {
  let ms = numbers[i] * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);
}