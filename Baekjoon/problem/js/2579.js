function inputReader(file, spliter){
    const input = require('fs').readFileSync(file).toString().split(spliter)
    let idx = 0
    this.read = ()=> idx < input.length ? input[idx++] : null
    this.readInt = ()=>parseInt(this.read())
}
const reader = new inputReader('input.txt', "\r\n")
//const reader = new inputReader('/dev/stdin', "\n")

const N = reader.readInt()
let scores = Array.from({length:N+1},()=>[])
scores[0] = [0,0]
scores[1] = [0,reader.readInt()]
for(let i=1; i<N; i++){
    let num = reader.readInt()
    scores[i+1] = [scores[i][1]+num, Math.max(...scores[i-1])+num]
}
console.log(Math.max(...scores[N]))