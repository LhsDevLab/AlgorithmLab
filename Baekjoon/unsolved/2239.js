let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let board = input.map(e=>e.split('').map(e=>parseInt(e)))
let rowGroup= Array.from({length:10},_=>[]);
let colGroup= Array.from({length:10},_=>[]);
let boardGroup= Array.from({length:10},_=>[]);
let available = {};
function clone(obj){
    let copy = {};
    for (let key of Object.keys(obj)){
        copy[key] = new Set(Array.from(obj[key]));
    }
    return copy;
}
function getBoardNum(i,j){
    return 3*parseInt(i/3)+parseInt(j/3);
}
function removeNumber(i,j,v,target){
    for (let e of rowGroup[i]){
        target[e].delete(v);
        if (e[0] != i && e[1] != j && target[e].size == 0) return true;
    }
    for (let e of colGroup[j]){
        target[e].delete(v);
        if (e[0] != i && e[1] != j && target[e].size == 0) return true;
    }
    for (let e of boardGroup[getBoardNum(i,j)]){
        target[e].delete(v);
        if (e[0] != i && e[1] != j && target[e].size == 0) return true;
    }
    return false;
}
for (let i=0; i<9; i++){
    for (let j=0; j<9; j++)
        if (board[i][j] == 0){
            available[[i,j]] = new Set([1,2,3,4,5,6,7,8,9]);
            rowGroup[i].push([i,j]);
            colGroup[j].push([i,j]);
            boardGroup[getBoardNum(i,j)].push([i,j]);
        }
}
for (let i=0; i<9; i++){
    for (let j=0; j<9; j++)
        if (board[i][j] != 0)
            removeNumber(i,j,board[i][j],available);
}
let keys = Object.keys(available);
let answer = {};
function recursive(idx, current){
    if (idx >= keys.length)
        return true;
    let list = [...current[keys[idx]]].sort();
    let [i,j] = keys[idx].split(',').map(e=>parseInt(e));
    for (let v of list){
        answer[keys[idx]] = v;
        let next = clone(current);
        if (removeNumber(i,j,v,next))
            return false;
        next[[i,j]].add(v);
        let res = recursive(idx+1, next);
        if (res == true) return true;
    }
    return false;
}
recursive(0,available);
for (let key of keys){
    let [i,j] = key.split(',').map(e=>parseInt(e));
    board[i][j] = answer[key];
}
for (let row of board){
    console.log(row.join(''));
}