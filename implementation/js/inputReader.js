function inputReader(file, spliter){
    const input = require('fs').readFileSync(file).toString().split(spliter)
    let idx = 0
    this.read = ()=> idx < input.length ? input[idx++] : null
    this.readInt = ()=>parseInt(this.read())
}
const reader = new inputReader('input.txt', "\r\n")
//const reader = new inputReader('/dev/stdin', "\n")