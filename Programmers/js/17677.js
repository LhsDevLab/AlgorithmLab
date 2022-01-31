function solution(str1, str2) {
    function getCluster(string){
        let clusters = [];
        for (let i=1; i<string.length ; i++){
            let tmp = string.slice(i-1,i+1);
            if (/^[a-zA-Z]*$/.test(tmp))
                clusters.push(tmp);
            else
                continue;
        }
        let res = {};
        for (let c of clusters){
            c = c.toUpperCase();
            if (res[c] == undefined)
                res[c] = 1;
            else
                res[c] += 1;
        }
        return res;
    }
    let set1 = getCluster(str1);
    let set2 = getCluster(str2);
    let intersec = Object.keys(set1).reduce((a,key)=> a + Math.min(set1[key],set2[key] == undefined ? 0 : set2[key]),0);
    let union = Object.values(set1).reduce((a,c)=>a+c,0)+Object.values(set2).reduce((a,c)=>a+c,0)-intersec;
    return parseInt(intersec == 0 ? union == 0 ? 65536 : 0 : intersec/union*65536);
}

console.log(solution('FRANCE','french'));
console.log(solution('handshake','shake hands'));
console.log(solution('aa1+aa2',	'AAAA12'));
console.log(solution('E=M*C^2',	'e=m*c^2'));