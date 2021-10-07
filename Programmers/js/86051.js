function solution(numbers) {
    return 45-numbers.reduce((a,c,idx)=>{
        return a+c;
    });
}