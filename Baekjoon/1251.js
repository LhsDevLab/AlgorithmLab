const String = require('fs').readFileSync('input.txt').toString();
//require('fs').readFileSync('/dev/stdin').toString();

for (let c of String){
    console.log(c)
}

console.log(String);