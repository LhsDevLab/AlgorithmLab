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
        board[i][j] = Math.log2(board[i][j]);
}
function move(board, dir){

}
console.log(board);