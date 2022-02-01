function solution(places) {
    var answer = [];
    const size = 5;
    function isVaild(start,place){
        let visited = Array.from({length:size}, e=>Array.from({length:size}, e=>false));
        let stack = [start];
        for (let i=0; i<2; i++){
            let next = [];
            for (let [r,c] of stack){
                visited[r][c] = true;
                let temp = [[r+1,c],[r-1,c],[r,c+1],[r,c-1]];
                for (let [r,c] of temp){
                    try{
                        if (visited[r][c])
                            continue;
                    }
                    catch(e){
                        continue;
                    }
                    let type = place[r].charAt(c);
                    if (type == "P"){
                        return false;
                    }
                    else if (type == "O")
                        next.push([r,c]);

                }
            }
            stack = next;
        }
        return true;
    }
    for (let place of places){
        let P = [];
        for (let i=0; i<size; i++){
            for (let j=0; j<size; j++)
                if (place[i].charAt(j) == "P")
                    P.push([i,j]);
        }
        let res = 1;
        for (let e of P){
            if (!isVaild(e,place)){
                res = 0;
                break;
            }
        }
        answer.push(res);
    }

    return answer;
}

console.log(solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], 
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
]));