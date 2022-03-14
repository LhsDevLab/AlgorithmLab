const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(){
        return this.readLine().split(" ").map(e=>parseInt(e));
    }
}
let [N,M] = reader.readList();
let lab = [];
for (let i=0; i<N; i++)
    lab.push(reader.readList());
for (let e of lab)
    console.log(e.join(' '));

// 3*3 보드를 움직이며 만들수 잇는 벽 케이스 구분
// 각 방향에서 오는 바이러스를 블록마다 저장해서 사용
