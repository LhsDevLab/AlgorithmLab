function solution(routes) {
    let answer = 1;
    routes.sort((a,b)=>{
        let res = a[0]-b[0];
        return res == 0 ? a[1]-b[1] : res;
    });
    let minEnd = routes.shift()[1];
    for (let [s,e] of routes){
        console.log(minEnd,s,e)
        if (minEnd < s){
            console.log(minEnd)
            answer += 1;
            minEnd = e;
        }
        else
            minEnd = Math.min(minEnd,e);
    }
    return answer;
}

//console.log(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]));
console.log(solution([[1,1], [1,3], [2,5], [3,3],[3,4],[5,6]]));