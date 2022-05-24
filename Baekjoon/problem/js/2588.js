const reader = {
  input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
  // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
  index: 0,
  readLine: function () {
    return this.input[this.index++];
  },
};
let [A, B] = [
  parseInt(reader.readLine()),
  reader
    .readLine()
    .split("")
    .map((e) => parseInt(e)),
];
let res = 0;
while (B.length) {
  let a = B.pop() * A;
  res = res / 10 + a;
  console.log(a);
}
console.log(Math.ceil(res * 100));
