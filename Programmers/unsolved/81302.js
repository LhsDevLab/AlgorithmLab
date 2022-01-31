function solution(places) {
    var answer = [];
    for (let place of places){
        let pos = {
            P: new Set(),
            X: new Set(),
        }
        for (let i=0; i<5; i++){
            for (let j=0; j<5; j++){
                let t = place[i].charAt(j);
                if (t != "O")
                    pos[t].add([i,j]);
            }
        }
    }
    return answer;
}

console.log(solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], 
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));