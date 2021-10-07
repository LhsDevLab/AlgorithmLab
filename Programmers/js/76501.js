function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((v,i)=>{
        if (signs[i])
            answer += v;
        else
            answer -= v;
    });
    return answer;
}