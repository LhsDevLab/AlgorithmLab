function solution(distance, rocks, n) {
    var answer = 0;
    rocks.sort((a,b)=>a-b);
    rocks = [0,...rocks,distance];
    let intv = [];
    let index = {};
    function add(key,val){
        if (index[key] == undefined)
            index[key] = [val];
        else
            index[key].push(val);
    }
    for (let i=0; i<rocks.length-1; i++){
        val = rocks[i+1]-rocks[i];
        intv[i] = val;
        add(val,i);
    }
    let keys = Object.keys(index);
    for (let i=0; i<n; i++){
        let key = keys[0];
        let idx = index[key].pop();
        if (index[key].length == 0)
            keys.shift();
        
    }
    console.log(keys)
    console.log(index)
    console.log(intv)
    return answer;
}
console.log(solution(25,	[2, 14, 11, 21, 17],	2));
