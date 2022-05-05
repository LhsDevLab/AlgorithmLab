const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    read() {
        return this.input[this.index++];
    }
}
let [N, I, M] = reader.read().split(" ").map(e => parseInt(e));
I /= 2;
let count = [];
for (let i=0; i<M; i++){

}
// 그룹의 끝점을 저장, 새로운 점으로 갱신
// 그룹 각각을 비교해서 가능한것은 그것을 기반으로 새 그룹을 만듬
