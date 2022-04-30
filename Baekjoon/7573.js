//7573
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
const Fishs = {
    set : new Set(),
    add(v){
        this.set.add(v);
    },
    has(r,c){
        return this.set.has(r+" "+c);
    }
};
for (let i=0; i<M; i++)
    Fishs.add(reader.read());

const shapes = [];
for (let i=1; i<I; i++)
    shapes.push([i,I-i]);
    
let answer = 0;
for (let [R,C] of Array.from(Fishs.set).map(e=>e.split(' ').map(e=>parseInt(e)))){
    for (let [H,W] of shapes){

    }
}