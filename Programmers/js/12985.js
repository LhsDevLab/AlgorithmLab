function solution(n,a,b){
    let answer = 0;
    a -= 1;
    b -= 1;
    while (a != b){
        a = parseInt(a/2);
        b = parseInt(b/2);
        answer += 1
    }
    return answer;
}
console.log(solution(8,1,7));