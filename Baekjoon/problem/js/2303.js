const reader = {
  input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
  // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
  index: 0,
  readList() {
    return this.input[this.index++].split(" ").map((e) => parseInt(e));
  },
};
let res = [0, 0];
let N = reader.readList()[0];
for (let i = 0; i < N; i++) {
  let list = reader.readList();
  let max = 0;
  let total = list.reduce((a, c) => a + c);
  for (let a = 0; a < 4; a++) {
    for (let b = a + 1; b < 5; b++) {
      let t = (total - list[a] - list[b]) % 10;
      if (max < t) max = t;
    }
  }
  if (max >= res[1]) res = [i, max];
}
console.log(res[0] + 1);
