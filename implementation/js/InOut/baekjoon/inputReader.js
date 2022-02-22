function inputReader(file, spliter){
    const input = require('fs').readFileSync(file).toString().split(spliter)
    let idx = 0
    this.read = ()=> idx < input.length ? input[idx++] : null
    this.readInt = ()=>parseInt(this.read())
}
const reader = new inputReader('input.txt', "\r\n")
//const reader = new inputReader('/dev/stdin', "\n")

const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ").map(e=>parseInt(e));
    },
    read2 : function(){
        let res = this.read();
        res.shift();
        return res;
    }
}