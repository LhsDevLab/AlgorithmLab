function solution(left, right) {
    let answer = 0;
    function countDivisor(num){
        let res = 0;
        for (let i=1 ; i<=Math.sqrt(num); i++){
            if (num%i == 0)
                res += (num==i*i ? 1 : 2);
        }
        return res;
    }
    for (let i=left ;i<=right; i++)
        answer += countDivisor(i)%2==0 ? i : -i;
    return answer;
}
console.log(solution(13,17));