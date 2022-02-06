function solution(n, costs) {
    costs.sort((a,b)=>b[2]-a[2]);
    stack = [];
    while (stack.length != 0){
        used = stack.pop();
        if (used.length == n-1){
            console.log(used)
        }
        for (let i=used.length; i<costs.length-(used.length-n); i++){
            stack.push([...used,i]);
        }
    }
    function combination(a,remain,n){

    }
    combination([],[],n-1)
}
console.log(
    solution(4,[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])
);