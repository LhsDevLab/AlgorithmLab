function solution(n) {
    var answer = '';
    while(n > 0){
        let res = n%3;
        if (res == 0){
            answer = 4+answer;
            n = Math.floor(n/3)-1;
        }
        else{
            answer = res+answer;
            n = Math.floor(n/3);
        }
    }
    return answer;
}
