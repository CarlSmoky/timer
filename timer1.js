const args = process.argv;
const numbers = args.slice(2);
numbers.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < numbers.length; i++) {
  let ms = numbers[i] * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);
}