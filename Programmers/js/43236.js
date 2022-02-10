function solution(distance, rocks, n) {
    rocks.sort((a,b)=>a-b);
    rocks = [0,...rocks,distance];
    let intv = [];
    for (let i=0; i<rocks.length-1; i++)
        intv[i] = rocks[i+1]-rocks[i];
    const isValid=(num)=>{
        let remove = -1;
        let current = 0;
        for (let e of intv){
            if (remove > n)
                return false;
            if (current < num){
                remove += 1;
                current += e;
            }else{
                current = e;
            }
        }
        if (current < num)
            remove += 1;
        return remove > n ? false : true;
    }
    let start = 0;
    let end = distance;
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (isValid(mid))
            start = mid+1;
        else
            end = mid;
    }
    return end-1;
}
console.log(solution(25,	[2, 14, 11, 21, 17],	2));
