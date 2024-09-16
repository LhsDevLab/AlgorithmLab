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

function solution(user_id, banned_id) {
  banned_id = banned_id.map((str) => {
    return user_id.filter((id) => {
      const regex = new RegExp(`^${str.replace(/\*/g, ".")}$`);
      return regex.test(id);
    });
  });

  let cases = [];

  function dfs(list, used) {
    if (list.length === banned_id.length) {
      cases.push(list.slice());
      return;
    }
    for (const id of banned_id[list.length] ?? []) {
      if (!used.has(id)) {
        list.push(id);
        used.add(id);
        dfs(list, used);
        list.pop();
        used.delete(id);
      }
    }
  }
  dfs([], new Set());

  cases = new Set(
    cases
      .map((e) => (e = Array.from(new Set(e))))
      .filter((e) => e.length === banned_id.length)
      .map((e) => e.sort().join(","))
  );

  return cases.size;
}

/*------------------------------------*/
const cases = [
  [
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "abc1**"],
  ],
  [
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"],
  ],
  [
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"],
  ],
  [
    [
      "aaaaaaaa",
      "bbbbbbbb",
      "cccccccc",
      "dddddddd",
      "eeeeeeee",
      "ffffffff",
      "gggggggg",
      "hhhhhhhh",
    ],
    [
      "********",
      "********",
      "********",
      "********",
      "********",
      "********",
      "********",
      "********",
    ],
  ],
];

for (const idx in cases) {
  console.log(`<<case : ${parseInt(idx) + 1}>>`);
  console.log(solution(...cases[idx]));
}
