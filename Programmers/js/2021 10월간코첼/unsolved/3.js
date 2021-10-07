function solution(n, m, x, y, queries) {
    var answer = -1;
    let rowOprs = []; let colOprs = []; 

    let rowTemp = undefined;
    let colTemp = undefined;
    queries.forEach(q=>{
        if (q[0] == 2 || q[0] == 3){
            if (rowTemp == undefined)
                rowTemp = q;
            else{
                if (q[0] == rowTemp[0])
                    rowTemp[1] += q[1];
                else{
                    rowOprs.push(rowTemp.slice());
                    rowTemp = q;
                }
            }
        }
        else{
            if (colTemp == undefined)
                colTemp = q;
            else{
                if (q[0] == colTemp[0])
                    colTemp[1] += q[1];
                else{
                    colOprs.push(colTemp.slice());
                    colTemp = q;
                }
            }

        }
    });rowOprs.push(rowTemp); colOprs.push(colTemp);

    function makeList(pos,opr){
        
    }

    return answer;
}

console.log(solution(2, 2, 0, 0, [[2, 1], [0, 1], [1, 1], [0, 1], [2, 1]]));