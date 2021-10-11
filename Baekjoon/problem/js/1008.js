let [a,b] = require('fs').readFileSync('input.txt').toString().split(' ').map(e=>parseInt(e));

console.log(a/b);
