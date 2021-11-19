function solution(orders, course) {
    orders = orders.map(e=>new Set(e))
    const union = (a,b)=>{
        for (e of b)
            a.add(e);
    }
    const getCourse = (size)=>{
        let targets = orders.filter(e => e.size >= size)
        let menus = new Set()
        for (order of targets)
            union(menus,order)
        console.log(targets)
        console.log(menus)
    }

    for (let e of course)
        getCourse(e)
    return null
}
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],[2,3,4]))