const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readLine: function () {
        return this.input[this.index++];
    },
    readList: function () {
        return this.readLine().split(" ").map(e => parseInt(e));
    }
}
const N = parseInt(reader.readLine());
let board = [];
for(let i=0; i<N; i++)
    board.push(reader.readList());
for (let i in board){
    for (let j in board)
        board[i][j] = board[i][j] == 0 ? 0 : Math.log2(board[i][j]);
}
let answer = board.reduce((a,c)=>{
    return Math.min(a, Math.min(...c));
},Infinity);
function move(board, dir){
    let res = Array.from({length:N},()=>
        Array.from({length:N}, ()=>0)
    );
    let lines = [];
    const getters = [
        (i,j)=>board[i][N-j-1],
        (i,j)=>board[N-j-1][i],
        (i,j)=>board[i][j],
        (i,j)=>board[j][i],
    ];
    const setters = [
        (i,j,v)=>{res[i][N-j-1] = v},
        (i,j,v)=>{res[N-j-1][i] = v},
        (i,j,v)=>{res[i][j] = v},
        (i,j,v)=>{res[j][i] = v},
    ];
    for (let i=0; i<N; i++){
        let temp = [];
        for (let j=0; j<N; j++){
            temp.push(getters[dir](i,j));
        }
        lines.push(temp);
    }
    lines = lines.map(line=>{
        let temp = [];
        line = line.filter(e=>e!=0);
        if (line.length != 0){
            let t = line.reduce((a,c)=>{
                if (a == null)
                    return c;
                if (a==c){
                    if (answer <= a)
                        answer = a+1;
                    temp.push(a+1);
                    return null;
                }
                temp.push(a);
                return c;
            })
            temp.push(t == null ? 0 : t);
        }
        while(temp.length != N)
            temp.push(0);
        return temp;
    });
    for (let i=0; i<N; i++){
        for (let j=0; j<N; j++){
            setters[dir](i,j,lines[i][j]);
        }
    }
    return res;
}
function dfs(base,depth){
    if (depth == 5)
        return;
    for (let i=0; i<4; i++)
        dfs(move(base,i), depth+1);
}
dfs(board,0);
console.log(2**answer);