function solution(n, m, x, y, queries) {
    var answer = 0;
    let ableList = {};

    function func1(pos,opr){
        let res = [];
        switch(opr[0]){
            case(0):
            if (pos[1] == 0){
                for(let i=0; i<=opr[1];i++)
                    res.push([pos[0],i]);
            }
            else
                res.push([pos[0],pos[1]-opr[1]]);
            break;
            case(1):
            if (pos[1] == m-1){
                for(let i=0; i<=opr[1];i++)
                    res.push([pos[0],pos[1]-i]);
            }
            else
                res.push([pos[0],pos[1]+opr[1]]);
            break;
            case(2):
            if (pos[0] == 0){
                for(let i=0; i<=opr[1];i++)
                    res.push([i,pos[1]]);
            }
            else
                res.push([pos[0]-opr[1],pos[1]]);
            break;
            case(3):
            if (pos[0] == n-1){
                for(let i=0; i<=opr[1];i++)
                    res.push([pos[0]-i,pos[1]]);
            }
            else
                res.push([pos[0]-opr[1],pos[1]]);
            break;
        }
        return res.filter(e=>(e[0] >= 0 && e[0] <n) && (e[1] >= 0 && e[1] <m));
    }
    function add(pos){
        if (ableList[pos[0]] == undefined)
            ableList[pos[0]] = {};
        ableList[pos[0]][pos[1]] = true;
    }
    function makeList(pos,stack){
        if (stack.length == 0){
            add(pos);
            return;
        }
        let list = func1(pos, stack.pop());
        list.forEach(e=>{
            makeList(e,stack.slice());
        });
    }
    try{
        makeList([x,y],queries);
    }catch(e){}

    Object.keys(ableList).forEach(e=>{
        answer += Object.keys(ableList[e]).length;
    });
    return answer;
}

console.log(solution(2, 2, 0, 0, [[2, 1], [0, 1], [1, 1], [0, 1], [2, 1]]));