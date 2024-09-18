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

function solution(n) {
  const preCount = {
    1: new Set(["()"]),
  };
  function caseMake(n) {
    const res = [];

    for (let i = 1; i < n; i += 1) {
      res.push([i, n - i]);
    }
    return res;
  }

  for (let i = 2; i <= n; i += 1) {
    preCount[i] = new Set();
    for (const [a, b] of caseMake(i)) {
      for (const strA of preCount[a]) {
        for (const strB of preCount[b]) {
          preCount[i].add(`${strA}${strB}`);
        }
      }
    }
    for (const str of preCount[i - 1]) {
      preCount[i].add(`(${str})`);
    }
  }

  return preCount[n].size;
}

/*------------------------------------*/
const cases = [[14]];

for (const idx in cases) {
  console.log(`<<case : ${parseInt(idx) + 1}>>`);
  console.log(solution(...cases[idx]));
}
