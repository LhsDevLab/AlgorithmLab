function solution(N, stages) {
    var answer = Array.from({length:N}, (_,i)=>i);
    let count = Array.from({length:N+1},e=>0)
    for (let stage of stages)
        count[stage-1] += 1 
    let cleared = []
    let sum = 0
    for (let i=N; i>0; i--){
        cleared[i-1] = count[i]+sum
        sum += count[i]
    }
    let failRate = []
    for (let i=0; i<N; i++)
        failRate[i] = count[i]/(count[i]+cleared[i])
    answer.sort((a,b)=>failRate[b]-failRate[a])
    return answer.map(e=>e+1);
}

console.log(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]))