function solution(nums) {
    let answer = 0;
    let list = [];
    let primeList = [2];
    let max = 0;

    function makeList(n, total, arr){
        if (arr.length < n) return;
        if (n == 0) {
            if (max < total) max = total;
            list.push(total);
            return;
        };
        arr.forEach((e,idx)=>{
            makeList(n-1, total+e, arr.slice(idx+1));
        }); 
    }
    makeList(3,0,nums);
    
    for(let i=3; i<max; i += 2){
        let isPrime = true;
        for(let j=0; j<primeList.length; j++){
            if (i%primeList[j] == 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) 
            primeList.push(i);
    }
    primeList.forEach(prime=>{
        let res = [];
        list.forEach(num=>{
            if (num == prime) answer += 1;
            else if (num%prime != 0)
                res.push(num);
        });
        list = res;
    });
    
    return answer+list.length;
}