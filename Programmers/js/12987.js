const fs = require("fs");
const OUTPUT = "OUTPUT";

fs.writeFileSync(OUTPUT, "", "utf8");
console.log = new Proxy(console.log, {
  apply: function (target, thisArg, argumentsList) {
    target.apply(thisArg, argumentsList);

    const logMessage =
      argumentsList.map((e) => JSON.stringify(e, null, 2)).join(" ") + "\n";
    fs.appendFileSync(OUTPUT, logMessage, "utf8");
    return true;
  },
});
/*------------------------------------*/

function solution(A, B) {
  let answer = 0;

  class NumberList {
    constructor(arr) {
      this.min = 0;
      this.max = arr.length - 1;
      this.list = arr.sort((a, b) => a - b);
    }
    popMax() {
      return this.list[this.max--];
    }
    popMin() {
      return this.list[this.min++];
    }
    getMax() {
      if (this.min > this.max) return null;
      return this.list[this.max];
    }
  }

  A = new NumberList(A);
  B = new NumberList(B);

  while (true) {
    let [a, b] = [A.getMax(), B.getMax()];
    if ([a, b].includes(null)) break;
    if (a < b) {
      B.popMax();
      answer += 1;
    } else {
      B.popMin();
    }
    A.popMax();
  }

  return answer;
}
/*------------------------------------*/
const cases = [
  [
    [1, 3, 9, 9],
    [2, 2, 8, 10],
  ],
];

for (const idx in cases) {
  console.log(`<<case : ${parseInt(idx) + 1}>>`);
  console.log(solution(...cases[idx]));
}
