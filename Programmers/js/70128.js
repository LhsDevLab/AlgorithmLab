function solution(a, b) {
    var answer = 0;
    a.forEach((v,i)=>{
        answer += v*b[i]; 
    });
    return answer;
}