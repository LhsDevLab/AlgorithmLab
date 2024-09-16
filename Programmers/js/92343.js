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

function solution(info, edges) {
  let answer = 0;

  //
  const visited = new Set([0]);

  function dfs(sheeps, wolves) {
    if (sheeps > wolves) answer = Math.max(answer, sheeps);
    else return;

    for (let [p, c] of edges) {
      if (visited.has(p) && !visited.has(c)) {
        visited.add(c);
        if (info[c] === 0) dfs(sheeps + 1, wolves);
        else dfs(sheeps, wolves + 1);
        visited.delete(c);
      }
    }
  }
  dfs(1, 0);

  return answer;
}

/*------------------------------------*/
const cases = [
  [
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ],
  ],
  [
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ],
  ],
];

for (const idx in cases) {
  console.log(`<<case : ${parseInt(idx) + 1}>>`);
  console.log(solution(...cases[idx]));
}
