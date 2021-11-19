function solution(orders, course) {
    let count = {a:10}
    count.addToObj=(key)=>{
        if (this[key] == undefined)
            this[key] = 1
        else
            this[key] += 1
    }
    for(let o of orders){
        count.addToObj(o)
    }
    console.log(count)
    return null
}
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],[2,3,4]))