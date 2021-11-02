const args = process.argv.slice(2);
if (args.length === 0) {
  return null;
}
let numbers = [];
for (let index = 0; index < args.length; index++) {
  if (Number(args[index]) && Number(args[index]) > 0) {
    numbers.push(Number(args[index]));
  }
}
if (numbers.length === 0) {
  return null;
}

numbers.sort(function(a, b) {
  return a - b;
});

for (let i = 0; i < numbers.length; i++) {
  let ms = numbers[i] * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);
}