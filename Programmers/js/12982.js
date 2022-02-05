function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>a-b);
    for (let cost of d){
        if (budget < cost)
            break;
        budget -= cost;
        answer += 1;
    }
    return answer;
}
console.log(solution([1,3,2,5,4],	9));