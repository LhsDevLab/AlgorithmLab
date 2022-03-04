function solution(info, query) {
    let answer = [];
    let lists = [
        ['cpp', 'java', 'python','-'], 
        ['backend','frontend','-'],
        ['junior','senior','-'],
        ['chicken','pizza','-']
    ];
    let table = (function init(depth){
        if (depth == lists.length)
            return [];
        let res = {};
        for (let e of lists[depth])
            res[e] = init(depth+1);
        return res;
        
    })(0);

    for (let I of info.map(e=>e.split(' '))){
        function f(args){
            if (args.length == 4){
                args.reduce((a,c)=>a[c],table).push(parseInt(I[4]));
                return;
            }
            f([...args, I[args.length]]);
            f([...args, '-']);
        }
        f([]);
    }
    (function f(arg){
        Object.values(arg).forEach(e=>{
            if (Array.isArray(e))
                e.sort((a,b)=>b-a);
            else
                f(e);
        });
    })(table);
    function upperBound(start, end, condi){
        while (start < end){
            let mid = parseInt((start+end)/2);
            if (condi(mid))
                start = mid+1;
            else
                end = mid;
        }
        return end;
    }
    for (let idx in query){
        let temp = query[idx].split(' and ');
        let [f,s] = temp.pop().split(' ');
        let [l,j,c] = temp;
        s = parseInt(s);
        let arr = table[l][j][c][f];
        answer[idx] = upperBound(0,arr.length,(n)=>{
            return arr[n] >= s;
        });
    }
    return answer;
}

console.log(solution(
    ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]
    ));