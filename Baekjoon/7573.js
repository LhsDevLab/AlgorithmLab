const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    read(){
        return this.input[this.index++];
    }
}
let [N,I,M] = reader.read().split(" ").map(e => parseInt(e));
I /= 2;
const Fishs = new Set();
let answer = 0;
for (let i=0; i<M; i++)
    Fishs.add(reader.read());
for (let [R,C] of Array.from(Fishs).map(e=>e.split(' ').map(e=>parseInt(e)))){
    for (let height = 1; height<I; height++){
        let width = I-height;
        let count = 0;
        for (let r = R+height; r>=R; r--){
            for (let c = C+width; c>=C; c--){
                if (Fishs.has(r+" "+c))
                    count+=1;
            }
        }
        if (count > answer)
            answer = count;
    }
}
console.log(answer);