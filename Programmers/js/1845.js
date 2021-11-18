function solution(nums) {
    let exist  = new Set();
    for(let p of nums)
        exist.add(p)
    return parseInt(nums.length/2) > exist.size ? exist.size : parseInt(nums.length/2);
}
console.log(solution([3,1,2,3]))