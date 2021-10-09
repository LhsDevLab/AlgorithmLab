let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let words = Array.from({length:15},()=>'');

input.forEach(e=>{
    for(let i=0; i<e.length; i++)
        words[i] += e.charAt(i);
});

console.log(words.reduce((a,c)=>{return a+c}));