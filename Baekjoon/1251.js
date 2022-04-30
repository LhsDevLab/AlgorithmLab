const String = require('fs').readFileSync('input.txt').toString();
//require('fs').readFileSync('/dev/stdin').toString();

function find(start,end){
    let list = [];
    for (let i=start; i<end; i++)
        list.push(i);
    let offset = 0;
    while(list.length != 1){
        let next = [list.pop()];
        for (let i of list){
            let [a,b] = [String.charAt(next[0]-offset),String.charAt(i-offset)];
            if (a > b)
                next = [i];
            else if (a == b)
                next.push(i);
        }
        offset += 1;
        list = next;
    }
    return list[0]
}

let idx = [];

idx.push(find(0, String.length-2));
idx.push(find(idx[0]+1,String.length-1))

let answer = [];
for (let i=idx[0]; i>=0; i--)
    answer.push(String.charAt(i));
console.log(answer)
for (let i=idx[1]; i>idx[0]; i--)
    answer.push(String.charAt(i));
console.log(answer)
for (let i=String.length-1; i>idx[1]; i--)
    answer.push(String.charAt(i));
console.log(answer)
console.log(answer.join(""));