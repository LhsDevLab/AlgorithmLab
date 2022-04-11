const input = require('fs').readFileSync('input.txt').toString().split("\r\n")
//const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
let func=()=>input.shift().split(' ').map(e=>parseInt(e)).reduce((a,c)=>a+c)
let [a,b] = [func(),func()]
console.log(a > b ? "Gunnar" : a < b ? "Emma" : "Tie")