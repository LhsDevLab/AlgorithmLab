let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = parseInt(input.shift());

for(let i=0; i<N; i++){
    let [source, target] = input.shift().split(' ');
    let count = Array.from({length:26},()=>0);
    if (source.length != target.length){
        console.log(`${source} & ${target} are NOT anagrams.`);
        continue;
    };
    for(let j=0; j<source.length; j++)
        count[source.charCodeAt(j)-97] += 1;
    let isAnagram = true;
    for(let j=0; j<target.length; j++){
        count[target.charCodeAt(j)-97] -= 1;
        if (count[target.charCodeAt(j)-97] == -1){
            console.log(`${source} & ${target} are NOT anagrams.`);
            isAnagram = false;
            break;
        }
    }
    if (isAnagram === true)
        console.log(`${source} & ${target} are anagrams.`);
}