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
  const grid = {};
  const tree = {};

  let [H, W] = [0, 0];
  let nextY = new Set();

  nodeinfo.forEach(([x, y], i) => {
    if (grid[y] === undefined) grid[y] = [];
    grid[y].push(i);

    H = Math.max(y, H);
    W = Math.max(x, W);

    nextY.add(y);
  });

  nextY = (() => {
    const res = {};
    const list = Array.from(nextY).sort();

    list.forEach((e, i) => {
      if (list[i + 1]) res[list[i + 1]] = e;
    });
    return res;
  })();

  //

  function getNode(start, end, y) {
    while (y !== undefined) {
      const list = grid[y];
      for (let node of list) {
        const x = nodeinfo[node][0];
        if (start <= x && x <= end) {
          return node;
        }
      }
      y = nextY[y];
    }
    return null;
  }

  function linkNode(p, c) {
    if (tree[p] === undefined) tree[p] = [];
    tree[p].push(c);
  }

  function makeTree(parent, start, end) {
    if (start < 0 || end > W) return;
    const [px, py] = nodeinfo[parent];

    const child = getNode(start, end, nextY[py]);
    if (child === null) return;

    linkNode(parent, child);
    let [cx, cy] = nodeinfo[child];
    makeTree(child, start, cx - 1);
    makeTree(child, cx + 1, end);
  }

  //
  const root = grid[H][0];
  makeTree(root, 0, nodeinfo[root][0] - 1, H);
  makeTree(root, nodeinfo[root][0] + 1, W, H);

  Object.values(tree).forEach((e) =>
    e.sort((a, b) => nodeinfo[a][0] - nodeinfo[b][0])
  );

  //
  let preOrder = [];
  let postOrder = [];

  function travel(node) {
    preOrder.push(node);
    for (const child of tree[node] ?? []) {
      travel(child);
    }
    postOrder.push(node);
  }
  travel(root);
  preOrder = preOrder.map((e) => e + 1);
  postOrder = postOrder.map((e) => e + 1);

  return [preOrder, postOrder];
}

/*------------------------------------*/
const cases = [
  [
    [
      [5, 3],
      [11, 4],
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
