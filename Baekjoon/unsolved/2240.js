let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [t,w] = input[0].split(' ').map(e=>{return parseInt(e)});
const order = input.slice(1);

const meshList = [];

(()=>{
    let loc = '1';
    let count = 0;
    
    order.forEach(e=>{
        if (e != loc){
            loc = e;
            meshList.push(count);
            count = 1;
        }
        else
            count += 1;
    });
    meshList.push(count);
})();

const pos1 = [];
const pos2 = [];
for(let i=0; i < meshList.length; i+=2){
    pos1.push(meshList[i]);
    pos2.push(meshList[i+1]);
}
const is1End = pos2[pos2.length-1] == undefined ? true : false;
const isEven = w%2 == 0 ? true : false;

if (is1End) pos2.pop();

function getRes(pos1, pos2){
    pos1.sort((a,b)=>{return a-b});
    pos2.sort((a,b)=>{return a-b});
    let count = w/2;
    while(true){
        let min1 = pos1.shift();
        let min2 = pos2.shift();
        if ()
    };
    
}

let res = pos1.shift();

if (isEven){
    if (is1End) res += pos1.pop();
    getRes(pos1,pos2);
}   
else{

}

console.log(res);
console.log(pos2);