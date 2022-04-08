const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(){
        return this.readLine().split('');
    }
}
const n = parseInt(reader.readLine());
const board = [];
for (let i=0; i<n; i++)
    board.push(reader.readList());
let fallenRow = [];
let remains = new Set(Array.from({length:n}, (_,i)=>i));
for (let r = 0; r<n; r++){
    fallenRow.push(r);
    for (let c = 0; c<n; c++){
        if (board[r][c] == 'W'){
            remains.delete(c)
            fallenRow.pop();
            break;
        }
    }
}
remains = Array.from(remains);//.sort((a,b)=>b-a);
for (let r of fallenRow)
    board[r][remains.pop()] = 'W';
for (let row of board)
    console.log(row.join(''));