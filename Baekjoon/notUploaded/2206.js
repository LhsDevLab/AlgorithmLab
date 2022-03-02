const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[index++];
    },
    readList : function(delimiter){
        delimiter = delimiter == undefined ? " " : delimiter;
        return this.readLine().split(delimiter).map(e=>parseInt(e));
    }
}
const [N,M] = reader.readList(" ");
const maxV = N*M+1;
let maze = [];
let costs = [];
for (let i=0; i<N; i++){
    maze[i] = reader.readList("");
    costs[i] = Array.from({length:M},()=>[maxV, maxV]);
}
costs[0][0] = [1,1];
let queue = [[0,0]];
while(queue.length != 0){
    let [R,C] = queue.shift();
    for (let [r,c] of [[R+1,C],[R-1,C],[R,C+1],[R,C-1]]){
        try{
            let [a,b] = [costs[r][c][0], costs[r][c][1]];
            if (maze[r][c] == 0){
                costs[r][c][0] = Math.min(costs[r][c][0], costs[R][C][0]+1);
                costs[r][c][1] = Math.min(costs[r][c][1], 
                    costs[R][C][0]+1,costs[R][C][1]+1);
            }else if (maze[r][c] == 1){
                costs[r][c][1] = Math.min(costs[r][c][1], costs[R][C][0]+1);
            }
            if (a != costs[r][c][0] || b != costs[r][c][1])
                queue.push([r,c]);
        }catch(e){};
    }
}
let res = Math.min(...costs[N-1][M-1]);
console.log(res == maxV ? -1 : res);