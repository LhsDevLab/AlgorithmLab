let fs = require('fs');
const { get } = require('http');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [N,M] = input[0].split(' ').map(e=>{return parseInt(e)});

let A = [];
let B = [];
let C = [];

for(let i=1; i<=N; i++){
    A.push(input[i].split('').map(e=>{return parseInt(e)}));
}
for(let i=N+1; i<=2*N; i++){
    B.push(input[i].split('').map(e=>{return parseInt(e)}));
};
for(let i=2*N+1; i<=3*N; i++){
    C.push(input[i].split('').map(e=>{return parseInt(e)}));
};
function getPosList(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            if (arr[i][j] == 1)
                res.push([i,j])
        }
    }
    return res;
}
function isEqual(a,b){
    return JSON.stringify(a) == JSON.stringify(b) ? true : false;
}
function getDistance(a,b){
    return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
}
A = getPosList(A);
B = getPosList(B);

let distanceList = [];
for(let i=0; i<A.length; i++)
    distanceList[i] = [];
for(let i=0; i<A.length; i++){
    for(let j=0; j<A.length; j++)
        distanceList[i][j] = getDistance(A[i],B[i]);
}

console.log(A);
console.log(B);
console.log(C);
console.log(distanceList);