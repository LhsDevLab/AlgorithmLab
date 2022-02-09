function solution(n, results) {
    let [winMatch,loseMatch,winCount,loseCount] = [{},{},{},{}];
    for (let i=1; i<=n; i++){
        winCount[i] = 0;
        loseCount[i] = 0;
        winMatch[i] = [];
        loseMatch[i] = [];
    }
    for (let [a,b] of results){
        winMatch[a].push(b);
        loseMatch[b].push(a);
    }
    const DFS=(match, count,start)=>{
        let visited = new Set();
        let stack = [start];
        while (stack.length != 0){
            let node = stack.pop();
            for (let child of match[node]){
                if (!visited.has(child)){
                    stack.push(child);
                    count[child] += 1;
                    visited.add(child);
                }
            }
        }
    }
    for (let i=1; i<=n; i++){
        DFS(winMatch,winCount,i);
        DFS(loseMatch,loseCount,i);
    }
    let res = 0;
    for (let i=1; i<=n; i++){
        if (winCount[i] + loseCount[i] == n-1)
            res += 1;
    }
    return res;
}
console.log(solution(5,	[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));
//console.log(solution(5,	[[3, 5], [4, 2], [4, 5], [5, 1], [5, 2]]));