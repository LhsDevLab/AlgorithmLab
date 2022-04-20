const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readItem() {
        return parseInt(this.input[this.index++]);
    },
    readList() {
        return this.input[this.index++].split(" ").map(e => parseInt(e));
    }
}
const [Size, Box] = [10000, 10];
for (let i = reader.readItem(); i > 0; i--) {
    let answer = 0;
    let countBoard = Array.from({ length: Size },()=>new Object());
    for (let j = reader.readItem(); j > 0; j--) {
        let [R, C] = reader.readList();
        for (let r = R > Box ? R - Box : 0; r<=R; r++){
            for (let c = C > Box ? C - Box : 0; c <= C; c++){
                if (countBoard[r][c] === undefined)
                    countBoard[r][c] = 1;
                else 
                    countBoard[r][c] += 1;
                if (countBoard[r][c] > answer)
                    answer = countBoard[r][c];
            }
        }
    }
    console.log(answer);
}