function solution(s){
    let stack = []
    for(let c of s){
        let top = stack.pop()
        if (top != c ){
            if (top != undefined)
                stack.push(top)
            stack.push(c)
        }
    }
    return stack.length == 0 ? 1 : 0;
}
console.log(solution("cdcd"))