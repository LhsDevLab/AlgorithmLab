let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split("\r\n")

let N = parseInt(input[0])
input = input.slice(1,N+1).map(e=>e.split(' ').map(e=>parseInt(e)))
let uppers = Array.from({length:N},()=>[]);
for(let i=0; i< N; i++){
    for(let j=0; j< N; j++){
        if (input[i][0]>input[j][0] && input[i][1]>input[j][1])
            uppers[j].push(i)
    }
}
console.log(uppers.map(e=>e.length+1).join(' '))