function solution(s) {
    let answer = [];
    let count = {};
    s = s.split('},{');
    s[0] = s[0].replace(/[{}]/g,"");
    s[s.length-1] = s[s.length-1].replace(/[{}]/g,"");
    for (let e of s){
        for (let key of e.split(','))
            if (count[key] == undefined)
                count[key] = 1;
            else
                count[key] += 1;
    }
    let entries = Object.entries(count);
    for (let [key, val] of entries)
        answer[entries.length-val] = parseInt(key);
    return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));