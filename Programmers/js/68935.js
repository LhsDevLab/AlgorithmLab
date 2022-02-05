function solution(n) {
    let res = 0;
    while (n != 0){
        res *= 3;
        res += n%3;
        n = parseInt(n/3);
    }
    return res;
}
console.log(solution(125))