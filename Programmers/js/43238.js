function solution(n, times) {
    times.sort()
    let min = 1
    let max = n*times[times.length-1]
    while (min <= max){
        let mid = parseInt((min+max)/2)
        let sum = times.reduce((a,c)=>a+parseInt(mid/c),0)
        if (sum >= n){
            max = mid-1
        }else
            min = mid+1
    }
    return min
}
console.log(solution(6,[7,10]))