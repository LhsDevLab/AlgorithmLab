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

function solution(users, emoticons) {
  let answer = [0, 0];

  function calcul(rates) {
    let tot_cnt = 0;
    let tot_amt = 0;
    const saled_emoticons = emoticons.map((e, i) => {
      return [rates[i], (e * (100 - rates[i])) / 100];
    });
    for (let [b_rate, b_amt] of users) {
      const user_amt = saled_emoticons.reduce((a, c) => {
        const [rate, price] = c;
        return a + (b_rate <= rate ? price : 0);
      }, 0);
      if (user_amt >= b_amt) {
        tot_cnt += 1;
      } else {
        tot_amt += user_amt;
      }
    }
    if (answer[0] < tot_cnt) {
      answer = [tot_cnt, tot_amt];
    } else if (answer[0] === tot_cnt) {
      answer = [tot_cnt, Math.max(answer[1], tot_amt)];
    }
  }

  function travel(cur) {
    if (cur.length === emoticons.length) {
      calcul(cur);
      return;
    }
    for (const next of [10, 20, 30, 40]) {
      cur.push(next);
      travel(cur);
      cur.pop();
    }
  }

  travel([]);

  return answer;
}

/*------------------------------------*/
const cases = [
  [
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000],
  ],
  [
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900],
  ],
];

for (const idx in cases) {
  console.log(`<<case : ${parseInt(idx) + 1}>>`);
  console.log(solution(...cases[idx]));
}
