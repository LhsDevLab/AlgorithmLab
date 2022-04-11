let commands = require('fs').readFileSync('input.txt').toString().split(" ").map(e => parseInt(e));
commands.pop();
const Cost = [
    [,2,2,2,2],
    [2,1,3,4,3],
    [2,3,1,3,4],
    [2,4,3,1,3],
    [2,3,4,3,1]
];
let DP = [0, Infinity, Infinity, Infinity, Infinity]
let lastTile = 0;
for (let tile of commands){
    if (tile == lastTile){
        for (let idx in DP)
            DP[idx] += 1;
        console.log(DP)
        continue;
    }
    let next = [Infinity,Infinity,Infinity,Infinity,Infinity];
    for (let idx in DP){
        let cost = DP[idx];
        if (cost == Infinity)
            continue;
        let temp = Cost[lastTile][tile] + cost;
        if (next[idx] > temp)
            next[idx] = temp;
        temp = Cost[idx][tile] + cost;
        if (next[lastTile] > temp)
            next[lastTile] = temp;
    }
    next[tile] = Infinity;
    DP = next;
    lastTile = tile;
}
console.log(Math.min(...DP));