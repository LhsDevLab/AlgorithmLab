function solution(orders, course) {
    function combination(arr, selectNum) {
        const result = [];
        if (selectNum === 1) return arr.map((v) => [v]);
        arr.forEach((v, idx, arr) => {
          const fixed = v;
          const restArr = arr.slice(idx + 1);
          const combinationArr = combination(restArr, selectNum - 1);
          const combineFix = combinationArr.map((v) => [fixed, ...v]);
          result.push(...combineFix);
        });
        return result;
    }
    function makeCourse(N){
        let count = {}
        let countUp = (name)=>{
            if (count[name] == undefined)
                count[name] = 1
            else
                count[name] += 1
        }
        for (let order of orders){
            if (order.length < N) continue
            for (let newOne of combination(order.split(''),N))
                countUp(newOne.sort().join(''))
        }
        let res = []
        let max = 2
        for (let key of Object.keys(count)){
            if (count[key] > max){
                max = count[key]
                res = [key]
            }else if (count[key] == max)
                res.push(key)
        }
        return res
    }
    let res = []
    for (let N of course)
        res = res.concat(makeCourse(N))
    return res.sort()
}
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],[2,3,4]))