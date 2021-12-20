let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let board = input.map(e=>e.split('').map(e=>parseInt(e)));
let blanks = {};
let section = Array.from({length:9},()=>[]);
function getBoardNum(i,j){
    return 3*parseInt(i/3)+parseInt(j/3);
}
function isValid(i,j,v){
    if (board[i].includes(v)){
        return false;
    }
    for (let i=0; i<9; i++){
        if (board[i][j] == v)
            return false;
    }
    for (let e of section[getBoardNum(i,j)]){
        let [i,j] = e;
        if (board[i][j] == v)
            return false;
    }
    return true;
}
for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){
        section[getBoardNum(i,j)].push([i,j]);
        if (board[i][j] == 0)
            blanks[[i,j]] = null;
    }
}
let keys = Object.keys(blanks);
function dfs(idx){
    let [i,j] = keys[idx].split(',').map(e=>parseInt(e));
    if (idx == keys.length-1){
        for (let v=1; v<=9; v++){
            if (isValid(i,j,v))
                board[i][j] = v;
        }
        return true;
    }
    for (let v=1; v<=9; v++){
        if (isValid(i,j,v)){
            board[i][j] = v;
            if (dfs(idx+1))
                return true;
        }
    }
    board[i][j] = 0;
    return false;
}
dfs(0);
for (let e of board)
    console.log(e.join(''));