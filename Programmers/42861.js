function solution(n, costs) {
    costs.sort((a,b)=>b[2]-a[2]);
    let indexs = combination(costs.length, n-1);
    for (let list of indexs){
        let set = new Set();
        for (let i of list){

        }
    }
    return indexs;
}
console.log(
    solution(4,[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])
);