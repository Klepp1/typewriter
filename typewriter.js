const sentence = "hello";
const type = (string) => {
  let timer = 0;
  for (let char of string) {
    timer += 750;
    setTimeout(() => {
      process.stdout.write(char);
    }, timer)
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, timer += 500)
};
type(sentence);