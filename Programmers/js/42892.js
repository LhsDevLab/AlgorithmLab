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

function solution(nodeinfo) {
  // 1
  const sorted = nodeinfo
    .map((e, i) => {
      return {
        idx: i + 1,
        x: e[0],
        y: e[1],
      };
    })
    .sort((a, b) => {
      return a.y === b.y ? a.x - b.x : b.y - a.y;
    });
  const lvlList = (() => {
    const res = [];
    let current = null;
    for (const node of sorted) {
      if (node.y !== current) {
        current = node.y;
        res.push([]);
      }
      res[res.length - 1].push(node);
    }
    return res;
  })();
  // 2
  const Tree = {
    childs: {},
    add(parent, child) {
      parent = parent.idx;
      if (this.childs[parent] === undefined) this.childs[parent] = [];
      this.childs[parent].push(child);
    },
  };
  // 3
  function find(start, end, lvl) {
    for (const node of lvlList[lvl] ?? []) {
      if (start <= node.x && node.x <= end) return node;
    }
    return null;
  }
  function makeTree(parent, start, end, lvl) {
    lvl += 1;
    const child = find(start, end, lvl);
    if (child === null) return;
    Tree.add(parent, child);
    makeTree(child, start, child.x - 1, lvl);
    makeTree(child, child.x + 1, end, lvl);
  }
  // 4
  makeTree({ idx: "root" }, 0, Infinity, -1);

  // 5
  const preOrder = [];
  const postOrder = [];
  function travel(nodeIdx) {
    preOrder.push(nodeIdx);
    for (const child of Tree.childs[nodeIdx] ?? []) travel(child.idx);
    postOrder.push(nodeIdx);
  }
  travel(Tree.childs.root[0].idx);
  return [preOrder, postOrder];
}

/*------------------------------------*/
const cases = [
  [
    [
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ],
  ],
];

for (const idx in cases) {
  console.log(`<<case : ${parseInt(idx) + 1}>>`);
  console.log(solution(...cases[idx]));
}
