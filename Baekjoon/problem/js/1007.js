const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readLine: function () {
        return this.input[this.index++];
    },
    readList: function () {
        return this.readLine().split(" ").map(e => parseInt(e));
    }
}
function combinationTravel(arr, size, callBack) {
    function traveler(cur) {
        if (cur.length == size) {
            cur = cur.map(e => arr[e]);
            callBack(cur);
            return;
        }
        let start = cur.length == 0 ? 0 : cur[cur.length - 1] + 1;
        for (let i = start; i <= arr.length - (size - cur.length); i++) {
            cur.push(i);
            traveler(cur);
            cur.pop(i);
        }
    }
    traveler([]);
}
function solution(vecSet) {
    let res = Infinity;
    const size = vecSet.length;
    let base = [0, 0];
    for (let [a, b] of vecSet) {
        base[0] += a;
        base[1] += b;
    }
    combinationTravel(vecSet, vecSet.length / 2, (list) => {
        let [x, y] = base;
        for (let [a,b] of list) {
            x -= a * 2;
            y -= b * 2;
        }
        res = Math.min(res, Math.sqrt(x ** 2 + y ** 2));
    });
    return res;
}
const T = parseInt(reader.readLine());
for (let i = 0; i < T; i++) {
    const N = parseInt(reader.readLine());
    let vecSet = [];
    for (let j = 0; j < N; j++)
        vecSet.push(reader.readList());
    console.log(solution(vecSet));
}